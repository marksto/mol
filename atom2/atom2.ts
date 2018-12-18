namespace $ {

	export function $mol_atom2_value< Value >( task : ()=> Value ) {
		const cached = $mol_atom2.cached
		try {
			$mol_atom2.cached = true
			return task()
		} finally {
			$mol_atom2.cached = cached
		}
	}

	export class $mol_atom2< Value = any > extends $mol_fiber< Value > {

		static get current() {
			const atom = $mol_fiber.current
			if( atom instanceof $mol_atom2 ) return atom
		}

		static cached = false

		slaves = [] as ( $mol_fiber | number | undefined )[]
		
		rescue( master : $mol_atom2 , cursor : number ) {
			
			const master_index = this.masters.length
			const slave_index = this.masters[ cursor + 1 ] as number + 1
			
			master.slaves[ slave_index ] = master_index
			this.masters.push( master , this.masters[ cursor + 1 ] )
			
		}

		get() {
			if( $mol_atom2.cached ) return this.value
			return super.get()
		}

		pull() {
			
			if( this.cursor === $mol_fiber_status.obsolete ) return super.pull()

			this.$.$mol_log( this , '⏭' )
			
			const masters = this.masters

			for( let index = 0 ; index < masters.length ; index += 2 ) {

				const master = masters[ index ] as $mol_atom2
				if( !master ) continue

				try {
					master.get()
				} catch( error ) {
					if( 'then' in error ) $mol_fail_hidden( error )
					this.cursor = $mol_fiber_status.obsolete
				}

				if( this.cursor as $mol_fiber_status !== $mol_fiber_status.obsolete ) continue

				this.$.$mol_log( this , '⏯' )
				return super.pull()
			}

			this.$.$mol_log( this , '✔✔' , this.value )
			this.cursor = $mol_fiber_status.actual

			return this.value
		}

		put( next : Value ) {
			this.push( next )
			this.cursor = $mol_fiber_status.persist
		}

		complete_master( master_index : number ) {
			if( this.masters[ master_index ] instanceof $mol_atom2 ) {
				if( master_index >= this.cursor ) this.disobey( master_index )
			} else {
				this.disobey( master_index )
			}
		}

		obey( master : $mol_fiber , master_index : number ) : number {
			return master.lead( this , master_index )
		}

		lead( slave : $mol_fiber , master_index : number ) {
			
			this.$.$mol_log( this , '☍' , slave )
			
			const slave_index = this.slaves.length
			this.slaves[ slave_index ] = slave
			this.slaves[ slave_index + 1 ] = master_index
			
			return slave_index
		}

		dislead( slave_index : number ) {

			if( slave_index < 0 ) return // slave is fiber
			
			this.$.$mol_log( this , '☌' , this.slaves[ slave_index ] )

			this.slaves[ slave_index ] = undefined
			this.slaves[ slave_index + 1 ] = undefined

			$mol_array_trim( this.slaves )

			if( this.cursor > $mol_fiber_status.persist && this.alone ) this.destructor()
		}

		obsolete( master_index = -1 ) {

			if( this.cursor > $mol_fiber_status.obsolete ) {
				if( master_index >= this.cursor - 2 ) return
				throw new Error( 'Obsoleted while calculation' )
			}
			
			if( this.cursor === $mol_fiber_status.obsolete ) return
			
			this.$.$mol_log( this , '✘' )
			if( this.cursor !== $mol_fiber_status.doubt ) this.doubt_slaves()
			
			this.cursor = $mol_fiber_status.obsolete
			
		}

		doubt( master_index = -1 ) {
			
			if( this.cursor > $mol_fiber_status.obsolete ) {
				if( master_index >= this.cursor - 2 ) return
				throw new Error( 'Doubted while calculation' )
			}
			
			if( this.cursor >= $mol_fiber_status.doubt ) return
				
			this.$.$mol_log( this , '�' )
			this.cursor = $mol_fiber_status.doubt
			
			this.doubt_slaves()
		}

		obsolete_slaves() {
			for( let index = 0 ; index < this.slaves.length ; index += 2 ) {
				const slave = this.slaves[ index ] as $mol_atom2
				if( slave ) slave.obsolete( this.slaves[ index + 1 ] as number )
			}
		}

		doubt_slaves() {
			for( let index = 0 ; index < this.slaves.length ; index += 2 ) {
				const slave = this.slaves[ index ] as $mol_atom2
				if( slave ) slave.doubt( this.slaves[ index + 1 ] as number )
			}
		}

		get fresh() {
			return ()=> {
				if( this.cursor === $mol_fiber_status.obsolete ) return

				this.cursor = $mol_fiber_status.obsolete
				this.schedule()
			}
		}

		get alone() {
			
			for( let index = 0 ; index < this.slaves.length ; index += 2 ) {
				if( this.slaves[ index ] ) return false
			}

			return true
		}
		
		get derived() {
			
			for( let index = 0 ; index < this.masters.length ; index += 2 ) {
				if( this.masters[ index ] ) return true
			}

			return false
		}

		destructor() {
			super.destructor()

			for( let index = 0 ; index < this.masters.length ; index += 2 ) {
				this.disobey( index )
			}

			this.cursor = $mol_fiber_status.obsolete
			
		}
		
	}

}
