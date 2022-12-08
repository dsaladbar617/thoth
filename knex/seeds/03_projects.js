/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('projects').del();
	await knex('projects').insert([
		{
			shop_id: 1,
			project_name: 'Demeter',
			tags: [
				'Javascript',
				'React',
				'Html',
				'Css',
				'Electron',
				'Desktop-App',
				'GPS (Global Positioning System)',
				'Information',
				'Data-transfer',
				'Satellite',
				'Planes',
				'Data-Security',
				'UDP-Traffic(User Datagram Protocol)',
				'General-Ops'
			],
			lang: ['Javascript', 'React', 'Html', 'Css'],
			short_desc:
				'Demeter is a microservice alternative to ACARS. ACARS information is visible to many outside agencies, potentially giving adversaries AMC aircraft positional data. Demeter allows aircraft to disable ACARs in threatened airspaces while continuing to provide secured positional data to mission planners and C2 systems.'
		},
		{
			shop_id: 1,
			project_name: 'Soteria',
			tags: [
				'Javascript',
				'React',
				'Html',
				'Css',
				'Java',
				'Spring',
				'Postgress-DB',
				'Web-App',
				'Information',
				'Track-IDF (mortars/rockets, Indirect-fire)',
				'Ground',
				'Form-Submition',
				'Table-Data',
				'Export-Map'
			],
			lang: ['Javascript', 'React', 'Html', 'Css', 'Java', 'Spring'],
			short_desc: 'this is a test short short_desc for Soteria'
		},
		{
			shop_id: 1,
			project_name: 'Glass House',
			tags: [
				'Javascript',
				'Html',
				'Css',
				'Ruby',
				'Shell',
				'React',
				'Material-UI',
				'Web-App',
				'Data Tracking',
				'Tickets',
				'Form-Submition',
				'Track people',
				'Time management',
				'Profiles',
				'Atomic design'
			],
			lang: ['Javascript', 'Html', 'Css', 'Ruby', 'Shell', 'React'],
			short_desc: 'this is a test short short_desc for Glass-House'
		},
		{
			shop_id: 1,
			project_name: 'Icarus',
			tags: [
				'Swift UI',
				'IOS',
				'Mobile',
				'Mission planning',
				'Maps',
				'Helicopter',
				'Waypoints',
				'Routes',
				'CSAR (combat search and rescue)',
				'Overlays',
				'Threat mapping',
				'Distance measuring'
			],
			lang: ['Swift UI'],
			short_desc:
				"Icarus is a mission planning interface for the Electronic Flight Bag (EFB) that CSAR (HH-60G) operators can use in tactical environments where commercial flight planning software is insufficient. It eliminates aircrew's reliance on paper maps by utilizing iOS-compatible mapping software and includes limited tools and capabilities currently available to operators in the Joint Mission Planning System (JMPS)."
		},
		{
			shop_id: 1,
			project_name: 'Mercury',
			tags: [
				'React',
				'Javascript',
				'Express',
				'Mysql',
				'Graphql',
				'Shell',
				'Web-app',
				'Form-submition',
				'Funeral',
				'Honor-guard',
				'Track requests'
			],
			lang: ['React', 'Javascript', 'Express'],
			short_desc: 'this is a test short short_desc for Mercury'
		},
		{
			shop_id: 1,
			project_name: 'Tether',
			tags: [
				'Javascript',
				'Web-app',
				'UDL (unified data library)',
				'GPS (global positioning system)',
				'Flight-data',
				'Data-collection',
				'Mission planning',
				'Information display',
				'Planes',
				'AMC (Air Mobility Command)'
			],
			lang: ['Javascript'],
			short_desc:
				'Tether is a microservice that linked the (MEIS) databases with the Unified Data Library (UDL) for the purposes of transporting AMC aircraft positional data. The MEIS was only visible to AMC mission planners, so Tether provided that data to nine additional COCOMS. Tether allowed mission planners to coordinate sorties and refueling operations with other aircraft platforms aligned to MAJCOMs outside of AMC.'
		},
		{
			shop_id: 1,
			project_name: 'Odyssey',
			tags: [
				'Kotlin',
				'Android',
				'Mobile',
				'XMl (CRD)',
				'arcGIS',
				'In-Development',
				'Map',
				'Plot-map',
				'Routes',
				'Planes',
				'Visual mapping',
				'PTP mapping(point to point)',
				'Navigation',
				'Information display',
				'Mission planning'
			],
			lang: ['Kotlin'],
			short_desc:
				'Odyssey is a dynamic mission planning interface for the Electronic Knee Board (EKB) that mobility air crews can use in disconnected, austere environments where commercial flight planning software is inoperable. It increases aircrew situational awareness by utilizing ArcGIS mapping technology and limited capabilities currently available to operators through the Joint Mission Planning System (JMPS).'
		},
		{
			shop_id: 1,
			project_name: 'Thoth',
			tags: [
				'Javascript',
				'React',
				'Css',
				'Html',
				'Mantine',
				'MongoDB',
				'Web-App',
				'Software-Tracking',
				'Information',
				'Data-Consolidation',
				'Software-Factory-Library'
			],
			lang: ['Javascript', 'React', 'Css', 'Html'],
			short_desc: 'this is the best project in Conjure history'
		},
		{
			shop_id: 4,
			project_name: 'MySquad',
			tags: ['Mobile'],
			lang: ['Kotlin', 'Spring'],
			short_desc:
				'MySquad is an opportunity for leaders to create more effective units Squad organization, counseling and readiness are just a few of the features that MySquad provides.'
		},
		{
			shop_id: 4,
			project_name: 'PMCS',
			tags: ['Kermit'],
			lang: ['Damn boi he thicc'],
			short_desc:
				'The PMCS application gives Soldiers an opportunity to view entire technical manuals or the PMCS checklist in order to conduct timely and accurate maintenance. The app covers over 600 types of rolling stock equipment with more being added regularly. The ability for operators to view equipment status and faults is currently in progress.'
		},
		{
			shop_id: 4,
			project_name: 'Carrera',
			tags: ['MLP'],
			lang: ['Doge'],
			short_desc:
				'Carrera allows National Guard and Reserve Soldiers to browse and apply to open Active Duty positions from anywhere at any time, removing the need to commute to an armory. Carrera provides a modern and accessible tool that can help fill critical positions around the world.'
		},
		{
			shop_id: 4,
			project_name: 'Blast Radius',
			tags: ['Big Chungus'],
			lang: ['Ugandan Knuckles'],
			short_desc:
				'Blast Radius gives ammunition handlers the ability to reduce site planning time from an average of 80 hours down to ~40 minutes. Blast Radius meets USATCES standards by calculating safe distances and compatibility in accordance with DoD regulations for above-ground storage of ammunition.'
		},
		{
			shop_id: 4,
			project_name: 'eTRIC',
			tags: ['Pepe'],
			lang: ['Dat Boi'],
			short_desc:
				'eTRIC supports data visualization for resource allocations with a user-friendly tool. Currently being used by organizations dependent on 25ID for land allocation easily overcome land limitations. This can ensure Soldiers have the right training opportunities and promote mission readiness.'
		},
		{
			shop_id: 4,
			project_name: 'AirSync',
			tags: ['Press F'],
			lang: ['Harambe'],
			short_desc:
				'AirSync is a collaborative mission planning tool for air assault operations per the Gold Book standard. AirSync aims to increase planning efficiency and reduce risk to mission, personnel, and equipment. Future capabilities of AirSync in the works include airborne operations and real-time modification of aircraft manifests.'
		},
		{
			shop_id: 4,
			project_name: 'Marketeer',
			tags: ['Omae Wa Mou Shindeiru'],
			lang: ['Belle Delphine'],
			short_desc:
				'Marketeer is a data aggregation and research tool for the market research component of the contracting process. This tool can reduce program acquisition lead time (PALT) and aid in FAR compliance.'
		},
		{
			shop_id: 4,
			project_name: 'Avi-X',
			tags: ['Grumpy Cat'],
			lang: ['Nyan Cat'],
			short_desc:
				'Avi-X provides tool room management enhancements for units to achieve increased readiness, time and cost savings. Avi-X enables tool room supervisors to spend 50% less time referencing tool locations and statuses within their inventories, resulting in better asset management.'
		},
		{
			shop_id: 4,
			project_name: 'CASL Picker',
			tags: ['GigaChad'],
			lang: ['First World Problems'],
			short_desc:
				'Common Authorized Stockage Listing (CASL) Picker optimizes the pick process at Supply Support Activities (SSA) by sorting the GCSS-Army generated pick tickets. CASL Picker organizes GCSS-Army outputs in accordance with the user’s preferences and generates a new PDF so units can print, quickly action the sorted list, eliminate the manual sort process, and speed-up order fulfillment.'
		},
		{
			shop_id: 4,
			project_name: 'FireWire',
			tags: ['Stonks'],
			lang: ['Copypasta'],
			short_desc:
				'FireWire is a web-based mobile and desktop application reporting tool that can modernize the indirect fire training experience at the National Training Center (NTC) by enabling data-driven analysis for the fire support community. FireWire enables Observer, Coach, Trainers (OC/Ts) to capture data at the point of creation and every echelon of the fire mission process for data-driven unit coaching and After Action Reviews, resulting in potential increased value for rotational training units and improved readiness.'
		},
		{
			shop_id: 4,
			project_name: 'SRCerer',
			tags: ['Shrek is love'],
			lang: ['Ligma'],
			short_desc:
				'SRCerer (pronounced Sorcerer) is a product that provides a Path-to-Production (P2P) for Army software development teams that can meet supported cloud native web application design patterns. It is the default P2P used by all ASWF teams and is also used by development teams from the Software Engineering Center (SEC), DEVCOM, and PEO EIS. The SRCerer product offers CI/CD pipelines and an accredited IL4 Kubernetes-based platform that leverages continuous Risk Management Framework (cRMF) through the Army CIO-approved DevSecOps Playbook.'
		},
		{
			shop_id: 5,
			project_name: 'ODS',
			tags: [
				'reporting',
				'anonymous',
				'commander-response',
				'feedback',
				'cac-less'
			],
			lang: ['angular', 'typeScript', 'nestjs', 'prisma', 'graphql'],
			short_desc:
				'Anonymous Reporting App to allow members to report instances of discrimination to commanders with the ability to get updates on how the instance was handled.'
		},
		{
			shop_id: 5,
			project_name: 'Waypoint',
			tags: ['tracking', 'in-progress'],
			lang: ['angular', 'typeScript', 'nestjs', 'prisma', 'graphql'],
			short_desc: 'readiness tracking (who tf knows)'
		},
		{
			shop_id: 5,
			project_name: 'Pythos',
			tags: [
				'apple',
				'mobile',
				'electronic flight bag',
				'efb',
				'awacs',
				'consolidation'
			],
			lang: ['c#', 'xamarin forms'],
			short_desc:
				'Folder application that contains forms that were digitized for use on EFBs. Pythos currently has 2 forms, PurpleDot and Form49.'
		},
		{
			shop_id: 5,
			project_name: 'PurpleDot',
			tags: [
				'form',
				'apple',
				'efb',
				'electronic flight bag',
				'legacy integration',
				'scantron',
				'awacs'
			],
			lang: ['c#', 'xamarin forms'],
			short_desc:
				'Digitized version of AFTO 117 scantron for use on an EFB, started out as a solo application, added to Pythos when Pythos was finished.'
		},
		{
			shop_id: 5,
			project_name: 'Form49',
			tags: ['form', 'apple', 'efb', 'electronic flight bag', 'awacs'],
			lang: ['c#', 'xamarin forms'],
			short_desc:
				'Digitized version of the paper Form 49, also to be used on an EFB'
		}
	]);
};