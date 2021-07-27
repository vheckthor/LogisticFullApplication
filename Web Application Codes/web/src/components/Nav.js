import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div>
			<nav id='signup-top-nav'>
				<div className='topLogo' id='signup-top-logo'>
					<svg className='Path_2076' viewBox='0 0.492 44.69 17.878'>
						<path
							id='Path_2076'
							d='M 0.6391686201095581 4.968416690826416 L 5.698694705963135 4.245887279510498 C 6.62128210067749 3.679137229919434 7.578700542449951 3.171795129776001 8.565767288208008 2.726577520370483
              C 11.82566070556641 1.249995231628418 15.3637809753418 0.4880675673484802 18.94271659851074 0.4920076727867126 L 19.82169723510742 0.4920076727867126 C 24.0452995300293 0.4950383305549622
             28.20132255554199 1.55488908290863 31.9109935760498 3.574883222579956 L 34.46437454223633 4.967812061309814 C 37.45331192016602 5.001453399658203 40.38463973999023 5.796418190002441 42.98138427734375 
             7.276631832122803 C 44.03668212890625 7.881872653961182 44.68828964233398 9.004769325256348 44.69011306762695 10.22102355957031 L 44.69011306762695 14.6437931060791 C 44.69011306762695 15.05531597137451
              44.35673141479492 15.38870716094971 43.94515228271484 15.38870716094971 L 41.44419097900391 15.38870716094971 C 40.63073348999023 17.7093334197998 38.09007263183594 18.93132972717285 35.76939010620117
               18.1179084777832 C 34.49200057983398 17.67023086547852 33.48786926269531 16.66586875915527 33.0402717590332 15.38870716094971 L 13.14037132263184 15.38870716094971 C 12.32695198059082 17.7093334197998
                9.786286354064941 18.93132972717285 7.465658664703369 18.1179084777832 C 6.18850040435791 17.67023086547852 5.184059619903564 16.66586875915527 4.73646068572998 15.38870716094971 L 4.469173431396484 
                15.38870716094971 C 4.37428617477417 15.38870716094971 4.280328750610352 15.3708610534668 4.192111492156982 15.33571434020996 L 1.779621481895447 14.36766338348389 C 0.7019383311271667 
                13.94093322753906 -0.003949102014303207 12.89777565002441 1.032215368468314e-05 11.73909091949463 L 1.032215368468314e-05 5.705796241760254 C 1.032215368468314e-05 5.335442066192627 
                0.2724982500076294 5.021152496337891 0.6391686201095581 4.968416690826416 Z M 34.32286071777344 14.49498176574707 C 34.65229034423828 16.10700798034668 36.22614669799805 17.14682960510254
                 37.83821105957031 16.81739616394043 C 39.4505615234375 16.48796081542969 40.49041366577148 14.91410732269287 40.16097640991211 13.3017692565918 C 39.83122634887695 11.68966770172119 
                 38.25735855102539 10.64984703063965 36.64527130126953 10.97928333282471 C 35.25817108154297 11.2627067565918 34.26226425170898 12.48314952850342 34.26257705688477 13.89911365509033
                  C 34.26257705688477 14.09913158416748 34.28282928466797 14.29884243011475 34.32286071777344 14.49498176574707 Z M 20.85546493530273 13.89911365509033 L 32.77290344238281 13.89911365509033
                   C 32.77290344238281 11.43083763122559 34.77348327636719 9.42994499206543 37.24176025390625 9.42994499206543 C 39.70999526977539 9.42994499206543 43.20050048828125 9.531770706176758 
                   43.20050048828125 12.00004768371582 L 43.20050048828125 13.89911365509033 L 42.98138427734375 13.89818096160889 C 42.98047637939453 13.21596050262451 42.83408355712891 11.31818294525146 42.24187850952148
                    10.97928333282471 C 39.81122207641602 9.591545104980469 40.04031372070313 9.429999351501465 37.24176025390625 9.429092407226563 L 32.77290344238281 13.89818096160889 L 20.85546493530273 13.89911365509033
                     Z M 20.85546493530273 4.961146831512451 L 31.34118843078613 4.961146831512451 L 31.19757843017578 4.882644653320313 C 28.0131721496582 3.152088642120361 24.47598266601563 2.171038866043091 20.85546493530273
                      2.014352083206177 L 20.85546493530273 4.961146831512451 Z M 19.36587142944336 1.981618046760559 L 18.94426536560059 1.981618046760559 C 15.94258213043213 1.978281855583191 12.96828365325928 2.548065662384033
                       10.18027496337891 3.660647869110107 L 11.48078441619873 4.961146831512451 L 19.36587142944336 4.961146831512451 L 19.36587142944336 1.981618046760559 Z M 6.019052028656006 14.49498176574707 C 6.348485946655273
                        16.10700798034668 7.922334671020508 17.14682960510254 9.534749984741211 16.81739616394043 C 11.1467752456665 16.48796081542969 12.18659782409668 14.91410732269287 11.85716247558594 13.3017692565918 C 11.5277271270752
                         11.68966770172119 9.953563690185547 10.64984703063965 8.34154224395752 10.97928333282471 C 6.954360961914063 11.2627067565918 5.95845365524292 12.48314952850342 5.958764553070068 13.89911365509033 C 5.958764553070068
               14.09913158416748 5.979014873504639 14.29884243011475 6.019052028656006 14.49498176574707 Z M 1.489601135253906 7.195405960083008 L 3.724183082580566 7.195405960083008 L 3.724183082580566 8.685342788696289 L 1.489601135253906 
               8.685342788696289 L 8.935544967651367 8.685342788696289 C 8.933765411376953 9.234193801879883 4.317024707794189 12.55778789520264 4.827392578125 12.75928211212158 L 4.469173431396484 13.84154415130615 C 4.469173431396484 
               13.77303504943848 4.477943420410156 13.70514583587646 4.482442855834961 13.63663864135742 C 4.487017631530762 13.56812572479248 4.488569736480713 13.48782348632813 4.495787620544434 13.41326332092285 C 4.503391265869141 13.33870315551758
               4.518208980560303 13.26414108276367 4.530080318450928 13.18988990783691 C 4.542186737060547 13.11532878875732 4.550949573516846 13.04076671600342 4.565849781036377 12.97319030761719 C 4.580667495727539 12.90530204772949 4.602469921112061 
               12.83019733428955 4.621866226196289 12.75928211212158 C 4.641262054443359 12.68860054016113 4.656158447265625 12.61714363098145 4.678584575653076 12.54770374298096 C 4.700694561004639 12.47857284545898 4.727694034576416 12.41223621368408 
               4.752830982208252 12.34434700012207 C 4.778278350830078 12.27676773071289 4.801322460174561 12.20670795440674 4.827392578125 12.13943958282471 C 4.853462696075439 12.07248115539551 4.888609886169434 12.01157569885254 4.919797420501709 
               11.94818782806396 C 4.950989246368408 11.88487720489502 4.98163366317749 11.81551456451416 5.016473770141602 11.75150489807129 C 5.051621437072754 11.68757438659668 5.0910325050354 11.63302898406982 5.12470531463623 11.57359886169434 C 
               5.157993793487549 11.51393413543701 5.198955535888672 11.44604301452637 5.241396427154541 11.38513946533203 C 5.284068584442139 11.3239221572876 5.323483467102051 11.27566337585449 5.364449501037598 11.22057723999023 C 5.405337333679199 
               11.16541194915771 5.451733112335205 11.10055065155029 5.499295234680176 11.04321193695068 C 5.546856880187988 10.98595428466797 5.591392993927002 10.9411096572876 5.63778829574585 10.89416885375977 C 5.683873176574707 10.84746074676514 5.735394954681396 10.78415012359619 5.786601066589355 10.73201084136963 C 5.838118553161621 10.67987251281738 5.888706207275391 10.63867378234863 5.939987182617188 10.59258556365967 C 5.991508007049561 10.54650020599365 6.046670913696289 10.49195575714111 6.103309631347656 10.4434642791748 C 6.159716606140137 10.39528274536133 6.217285633087158 10.35796451568604 6.273613452911377 10.31552410125732 C 6.33032751083374 10.27316093444824 6.386967182159424 10.22769546508789 6.446399211883545 10.1879711151123 C 6.506065368652344 10.14855670928955 6.573097705841064 10.11371994018555 6.63702917098999 10.07190132141113 C 6.701272487640381 10.0300817489624 6.75341272354126 9.997340202331543 6.813696384429932 9.96552848815918 C 6.874058246612549 9.933406829833984 6.949164867401123 9.899734497070313 7.017673969268799 9.866992950439453 C 7.086180210113525 9.834251403808594 7.139792919158936 9.805155754089355 7.203181743621826 9.778542518615723 C 7.266495227813721 9.751543045043945 7.352304935455322 9.723380088806152 7.426555156707764 9.696689605712891 C 7.501117706298828 9.669689178466797 7.54960823059082 9.648818969726563 7.612918853759766 9.628801345825195 C 7.697799205780029 9.602730751037598 7.784775257110596 9.583956718444824 7.871439933776855 9.562386512756348 C 7.928153991699219 9.549118995666504 7.982385635375977 9.531195640563965 8.039650917053223 9.519404411315918 C 8.13120174407959 9.500627517700195 8.225159645080566 9.49030876159668 8.31818675994873 9.476653099060059 C 8.373353004455566 9.469359397888184 8.426111221313477 9.457257270812988 8.481198310852051 9.45213508605957 C 8.630322456359863 9.437238693237305 8.779133796691895 9.429092407226563 8.935544967651367 9.429092407226563 C 11.4028902053833 9.431497573852539 13.40222835540771 11.43083763122559 13.40471267700195 13.89818096160889 L 19.36556243896484 13.89818096160889 L 13.40471267700195 13.89911365509033 L 8.565767288208008 9.429092407226563 C 8.368151664733887 9.429092407226563 8.705190658569336 8.825052261352539 8.565767288208008 8.685342788696289 L 7.871439933776855 8.685342788696289 C 7.060729026794434 9.071159362792969 6.446399211883545 8.887520790100098 6.446399211883545 8.887520790100098 C 6.446399211883545 8.887520790100098 5.602019309997559 8.670483589172363 5.499295234680176 8.685342788696289 L 3.724183082580566 8.685342788696289 L 1.489601135253906 7.195405960083008 Z M 1.489601135253906 7.195405960083008'
							fill='#EF1D52'
						></path>
					</svg>
					<h3 className='topHeader'>TRANSIS</h3>
				</div>
				<ul id='signup-top-list'>
					<li id="signup-top-list-element-1">
						<Link to='/ride'>Ride</Link>
					</li>
					<li id="signup-top-list-element-2">
						<Link to='/drive'>Drive</Link>
					</li>
					<li id="signup-top-list-element-3">
						<Link to='/logistics'>Logistics</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
