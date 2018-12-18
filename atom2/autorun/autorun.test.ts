namespace $ {

	$mol_test({

		async 'Autorun' () {

			class App extends $mol_object2 {

				@ $mol_atom2_field
				static state = 1
				
				static counter = 0

				@ $mol_atom2_field
				static get init() {
					++ this.counter
					return this.state
				}

			}

			const autorun = $mol_atom2_autorun( ()=> App.init )

			try {

				await $mol_fiber_warp()
				$mol_assert_equal( App.counter , 1 )
				
				App.state = 2
				$mol_assert_equal( App.counter , 1 )

				await $mol_fiber_warp()
				$mol_assert_equal( App.counter , 2 )

			} finally {
				autorun.destructor()
			}

			App.state = 3
			await $mol_fiber_warp()
			$mol_assert_equal( App.counter , 2 )

		} ,

	})

}
