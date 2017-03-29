//------------------BACKEND PART----------------------
var sevenSon = "<f>1<a>asd</a><b>gdf<c>gyj<a>iu</a><q>kt<a>kjgg</a></q><l>jughj<a>ou</a></l><h>23f4</h></c><a>sdf54hs<d>23sk8f<a>skldjg</a><a>23d<w>f43f<r>sdf54h7</r></w><e>bdw32</e></a><p>565fdgh<a>98k53s</a><e>bfb2111sa<a>dfbgs43hm<ct>dsfgh4h<fg>23d23d</fg><dfw>gdfgdf4<gh>fdgh34<gf>sfgh34<rt>dftgr5</rt><tc>dfsgh67</tc></gf></gh></dfw></ct></a></e></p><a>234r4df456s</a></d><ts>gfljk85</ts><a>35gfdgfi7</a><sda>23r4asa<aa>fgd4</aa><fg>fng54<the>11234e<ew>nh3<we>dfeg3<gbdt>dfg33g</gbdt><ghg>ghdg<try>dfgh23<lol>dfgh54</lol><pop>sdfg32<st>ertyeg</st><jfg>fghr</jfg><frfe>sdfgsdv<tr>sdfg3<ewq>sdfg3</ewq><fgf>glyashotut</fgf><tt>34rsee</tt><qwe>asd<ssf>nucho</ssf></qwe></tr></frfe><obla>ka</obla><belo>snegn</belo><ie>loshadki</ie><ss>dsfg3gjj<gjf>sdfg</gjf><sdfg>ramamba</sdfg><trte>hara</trte><hutp>bam</hutp><pory>byry</pory><dnishe>oyoy</dnishe><wqe>kto<ewq>eg3w<ert>nicho<ret>gde<tre>xto<ne>xodi<tot>ktoto</tot></ne></tre></ret></ert></ewq></wqe><odin>da</odin></ss><asdkjjjg>hot</asdkjjjg></pop></try></ghg></we></ew></the></fg></sda><h>as23fs454</h></a></b></f>";
var base64 = "UVRjb3JyZWN0QW5zd2Vy";
var reg = /\/level\d*/i;

Router.route(reg, function () {
	this.response.setHeader( 'access-control-allow-origin', '*' );
	this.response.setHeader( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS' );
	this.response.setHeader( 'access-control-allow-headers', 'Content-Type,accept,Questaton,QuestatonLevel4' );
	var data = this.request.body;
	var requestMethod = this.request.method;
	var url = this.url;
	var elseMsg = "Server received your request, but something is wrong in it. If you you're seeing this message during 15 minutes on a one level - you may need help."

	if (requestMethod == 'GET') {

		if (url.split('/').pop() === 'simpleGet') { //LEVEL 1
			this.response.statusCode = 200;
		  this.response.end( "Level 1 passed. Code: QT9684jguuth5s" );
		} else if (url.split('/').pop() === 'getWithHeader' && this.request.headers.floor === "3.5") { //LEVEL 3
				this.response.statusCode = 200;
			  this.response.end( "Level 3 passed. Code: QTasdgshtt73gfdf" );
		} else if (url.split('/').pop() === 'getHeader') { //LEVEL 5
				this.response.statusCode = 200;
				this.response.setHeader("QuestatonHeader", "QTfdklghj3s85fjjf");
			  this.response.end();
		} else if (url.split('/').pop() === 'getWithCookies' && //LEVEL 6
		             ( this.request.headers.cookie === "QuestatonLevel=6" || this.request.headers.cookies == "QuestatonLevel=6")) { //LEVEL 6
				this.response.statusCode = 200;
				this.response.end("Level 6 Passed. Code: QTasdkljdlkrj88jsp");
		} else if (url.split('/')[1] === 'level7' ) { //LEVEL 7
				var splitURL = url.split('/');
				var endURL = splitURL[splitURL.length-2] + splitURL[splitURL.length-1];
				if ( endURL === 'getJSON23') {
					this.response.statusCode = 200;
					this.response.end("{\"Level\": \"7\", \"Code\": [{\"1\": \"tryuwh\"}, {\"2\": \"sadjru\"}]}");
				} else {
					this.response.statusCode = 200;
					this.response.end(elseMsg);
				}
		} else if (url.split('/').pop() === 'getXML' ) { //LEVEL 8
				this.response.statusCode = 200;
				this.response.end(sevenSon);
		} else if (url.split('/').pop() === 'getBXSX64FORMXT' ) { //LEVEL 10
				this.response.statusCode = 200;
				this.response.end(base64);
		} else if (url.split('/')[1] === 'level11' ) { //LEVEL 11
				if ( url.split('/').pop() === 'retry') {
		       this.response.statusCode = 200;
		       this.response.setHeader("Location", "/level11/re267J");
		       this.response.setHeader("Set-Cookie", "quest=94jg772h7");
		       this.response.end("Success");
		     } else if (url.split('/').pop() === 're267J' && this.request.headers.cookie === "quest=94jg772h7") {
		       this.response.statusCode = 200;
		       this.response.setHeader("Location", "/level11/re302");
		       this.response.setHeader("Set-Cookie", "quest=ghyttomne");
		       this.response.end("Success2");
		     } else if (url.split('/').pop() === 're302' && this.request.headers.cookie === "quest=ghyttomne") {
		       this.response.statusCode = 200;
		       this.response.end("Code: QT754hgf932j");
		     } else {
		       this.response.statusCode = 200;
		       this.response.end(elseMsg);
		     }
		} else {
			this.response.statusCode = 200;
		  this.response.end(elseMsg);
		}
	}

	else if (requestMethod == 'POST') {
		var reqData = JSON.stringify(data);
		if (url.split('/').pop() === 'simplePost' && reqData === '{"username":"oxrannik1","password":"password1"}') { //LEVEL 2
			this.response.statusCode = 200;
		  this.response.end( "Level 2 passed. Code: QTdmklfv58dhjjdh" );
		} else if (url.split('/').pop() === 'postWithHeader' && this.request.headers.camera === "1234") { //LEVEL 4
			this.response.statusCode = 200;
			this.response.end("Level 4 passed. Code: QTnfgnfsa652azu7");
		} else {
			this.response.statusCode = 200;
		  this.response.end(elseMsg);
		}
	}

	else if (requestMethod == 'DELETE') {
		if (url.split('/').pop() === 'laserSystem') { //LEVEL 9
			this.response.statusCode = 200;
		  this.response.end('Deleted successfully. Code: QT43dokTret');
 		} else {
			this.response.statusCode = 200;
		  this.response.end(elseMsg);
		}
	}

	else {
		this.response.statusCode = 200;
		this.response.end(elseMsg);
	}

	}, { where: "server" });

// ------------------ ROUTER END-----------------
