namespace $ { export class $mol_app_files_demo extends $mol_demo_large {

	/// sub / <= App
	sub() {
		return [].concat( this.App() )
	}

	/// App $mol_app_files
	/// 	title_root <= title
	/// 	uri_root_default <= uri_root
	@ $mol_mem
	App() {
		return (( obj )=>{
			obj.title_root = () => this.title()
			obj.uri_root_default = () => this.uri_root()
			return obj
		})( new this.$.$mol_app_files )
	}

	/// title @ \WebDAV client
	title() {
		return this.$.$mol_locale.text( "$mol_app_files_demo_title" )
	}

	/// uri_root \https://ajaxexplorer.com:443/User5df12c6/
	uri_root() {
		return "https://ajaxexplorer.com:443/User5df12c6/"
	}

} }

