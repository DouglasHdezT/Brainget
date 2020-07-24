/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
	mainLogo: Icons.mainLogo,
	appVersion: Keys.app_version,
	ppURL: Keys.privacy_policy_url,
	sourceCode: Keys.source_code_link,
	licenseShortText: Keys.license_about_short_text,
	optionsMenu: [
		{
			title: Keys.license_about_title,
			color: Colors.pink600,
			src: Icons.license,
			info: Keys.empty_text,
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
			title: Keys.libraries_about_title,
			color: Colors.purple600,
			src: Icons.libraries,
			info: Keys.empty_text,
			isSourceBG: false,
			redirect:{
				route: "AboutOption",
				params:{
					title: Keys.libraries_about_title,
					type: Types.LIBRARIES,
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
			info: Keys.empty_text,
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
			info: Keys.empty_text,
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
						logo: "<DeushdezT/>"
					}
				}
			}
		},
	]
}