import { Keys } from '../../translation/TranslationHelper';

import Colors from './Colors';
import Icons from './Icons';

import LibrariesData from './LibrariesUsedData';
import References from './ReferencedAssets';

export const Types = {
	LICENSE: "LICENSE",
	RESOURCES: "RESOURCES",
	LIBRARIES: "LIBRARIES",
	DEVELOPER: "DEVELOPER"
}

export default {
	appName: Keys.app_title_text,
	appVersion: Keys.app_version,
	sourceCode: Keys.source_code_link,
	licenseShortText: Keys.license_about_short_text,
	optionsMenu: [
		{
			title: Keys.license_about_title,
			color: Colors.pink600,
			src: Icons.license,
			info: "",
			isSourceBG: false,
			redirect:{
				route: "AboutOption",
				params:{
					title: Keys.license_about_title,
					type: Types.LICENSE,
					props: {
						title: Keys.license_title,
						text: Keys.license_text
					}
				}
			}
		},
		{
			title: Keys.resources_about_title,
			color: Colors.purple600,
			src: Icons.resources,
			info: "",
			isSourceBG: false,
			redirect:{
				route: "AboutOption",
				params:{
					title: Keys.resources_about_title,
					type: Types.RESOURCES,
					props: {
						main: LibrariesData.main,
						aux: LibrariesData.aux,
					}
				}
			}
		},
		{
			title: Keys.resources_about_title,
			color: Colors.deepPurple600,
			src: Icons.resources,
			info: "",
			isSourceBG: false,
			redirect:{
				route: "AboutOption",
				params:{
					title: Keys.resources_about_title,
					type: Types.RESOURCES,
					props: {
						icons: References.icons,
						images: References.images,
					}
				}
			}
		},
		{
			title: Keys.developer_about_title,
			color: Colors.indigo600,
			src: Icons.developer,
			info: "",
			isSourceBG: false,
			redirect:{
				route: "AboutOption",
				params:{
					title: Keys.developer_about_title,
					type: Types.DEVELOPER,
					props: {
						name: Keys.developer_name,
						email: Keys.developer_email,
						specs: Keys.developer_specs,
						repository: Keys.developer_repository,
						logo: Icons.logoDev
					}
				}
			}
		},
	]
}