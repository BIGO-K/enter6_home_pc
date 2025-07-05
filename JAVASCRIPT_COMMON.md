# common.js 파일 설명
+ 퍼블리싱에서 제작한 ***app_common.js***, ***app_page-common.js*** 파일에 대한 설명입니다.
<br><br>
- - -
## app_common.js
+ 범용적으로 사용하는 컴포넌트&헬퍼 파일입니다.
+ **mm** (m.monstar) 오브젝트에 구성되어 있습니다.

### variables
+ mm.**\_isPublish**
	- 현재 url이 퍼블리싱 테스트 경로인지 상태를 리턴합니다.
	```JavaScript
	mm._isPublish;// true/false
	```
+ mm.**\_isTouch**
	- 모바일 터치 상태를 리턴합니다.
	```JavaScript
	mm._isTouch;// true/false
	```
+ mm.**\_isIframe**
	- 현재 document가 iframe 내부에 있는지 상태를 리턴합니다.
	```JavaScript
	mm._isIframe;// true/false
	```
+ mm.**times**
	- css 애니메이션 transition과 동일한 시간을 적용하기 위해 사용합니다.
	```JavaScript
	mm.times._base;// 0.4초
	mm.times._fast;// 0.2초
	mm.times._faster;// 0.1초
	mm.times._slow;// 0.7초
	mm.times._slower;// 1초
	```

### method/function
+ mm.**is**
	- 다양한 상태를 확인하고 **true/false** 로 결과를 리턴합니다.
	- mm.**is.mobile**(*type*)
		* *type* 이 빈 값이면 모바일인지 확인합니다.
		* 일반적인 확인 가능한 *type* 값으로 **iphone, ipod, ipad, ios, android, blackberry, window, opera** 가 있습니다.
		* 앱에서 userAgent를 커스터마이징한 후 확인 가능한 *type* 값으로 **app, app_ios, app_android, app_kitkat, app_first** 가 있습니다.
		* 엠몬스타에서 제작하는 앱에는 userAgent가 커스터마이징되어 있습니다.
		```JavaScript
		mm.is.mobile();// 모바일 확인
		mm.is.mobile('ios');// iphone, ipod, ipad 확인
		mm.is.mobile('app_first');// 앱 최초 실행 확인
		```
	- mm.**is.odd**(*value*)
		* *value* 가 홀수인지 확인합니다.
		```JavaScript
		mm.is.odd(1);// true
		mm.is.odd(2);// false
		```
	- mm.**is.even**(*value*)
		* *value* 가 짝수인지 확인합니다.
		```JavaScript
		mm.is.even(1);// false
		mm.is.even(2);// true
		```
	- mm.**is.empty**(*value*, *excepts*)
		* *value* 가 빈 값인지 확인합니다.
		* *excepts* 배열로 예외어를 설정하면 결과가 반대로 리턴됩니다.
		```JavaScript
		mm.is.empty(0);// false
		mm.is.empty(true);// false
		mm.is.empty(false);// false
		mm.is.empty(함수);// false
		mm.is.empty({});// true
		mm.is.empty([]);// true
		// undefined, null, NaN, 'undefined', 'null', 'NaN'은 true를 리턴합니다.
		mm.is.empty(NaN, [NaN]);// false 예외어 설정
		mm.is.empty(0, [0, '0']);// true 예외어 설정
		// 그 외 jQuery selector의 length가 0보다 크면 false를 리턴합니다.
		```
+ mm.**instant**(*function*, *options*)
	- *function* 의 늦은 실행을 위해 setTimeout을 대신해서 사용합니다.
	- 단위는 **ms** 이고, 기본 시간은 **1ms** 입니다.
	- *options* 로 _delay (딜레이 시간)과 thisObj (*function.apply* this요소), args (*function* 아규먼트)를 설정할 수 있습니다.
	```JavaScript
	// 일반적인 1ms 후에 실행하는 setTimeout 설정
	setTimeout(function() {
		실행할 함수
	}, 1);
	  
	// 1ms 후에 실행하는 함수 설정
	mm.instant(실행할 함수)
	// 함수에 옵션 적용 (0.1초 후에 함수에 아규먼트 'a', 'b'를 적용하여 실행)
	mm.instant(실행할 함수, { _delay: 100, thisObj: window, args: ['a', 'b'] });
	```
+ mm.**find**(*element*)
	- DOM에서 *element* 요소를 찾아 배열로 결과를 리턴합니다.
	```JavaScript
	mm.find('#element');// [document.getElementById('#element')];
	mm.find('.element');// document.getElementsByClassName('.element');
	mm.find('div');// document.getElementsByTagName('div');
	mm.find('.element .sub')// document.querySelectorAll('.element .sub');
	```
+ mm.**root**(*target*, *function arguments*)
	- 최상위(**top.window**)에서 *target* 요소를 찾거나 함수를 실행합니다.
	- iframe 내부에서 최상위 부모의 *target* 요소를 찾거나 함수를 실행할 때 사용할 수 있습니다.
	- iframe이 아닐 경우, 문자열로 *target* 함수를 실행할 때 사용할 수 있습니다.
	- *target* 이 함수일 때 *function arguments* 로 아규먼트를 설정할 수 있습니다.
	```JavaScript
	mm.root();// top.window
	mm.root(document);// top.window.document
	mm.root('div');// top.window.mm.find('div')와 결과 같음
	mm.root('mm.find', ['a']);// top.window.mm.find('a')를 실행
	```
+ mm.**focus**
	- *element* 요소에 포커스를 인/아웃합니다.
	- mm.**focus.in**(*element*, *options*)
		* *element* 요소에 포커스를 적용합니다.
		* *options* 로 _outline (아웃라인 css)을 설정할 수 있습니다.
		```JavaScript
		mm.focus.in('.element');// .element에 포커스 적용
		mm.focus.in('.element', '1px solid red');// .element에 포커스를 하고, CSS outline:1px solid red 를 적용
		```
	- mm.**focus.out**(*element*)
		* *element* 요소에 적용된 포커스를 해제합니다.
		```JavaScript
		mm.focus.out('.element');// .element에 포커스 해제
		```
+ mm.**anchor**(*target*, *options*)
	- *target* 위치로 앵커를 이동합니다.
	- *target* 이 페이지 내 요소일 경우, 해당 위치로 이동 후 포커스를 적용합니다.
	- *target* 이 숫자일 경우, scrollTop 위치가 *target* 으로 이동합니다.
	- *options* 로 scroller (스크롤 요소), _direction (스크롤 방향), _margin (*target* 과의 간격), _time (이동 시간/sec), _isFocus (이동 후 포커스 여부/boolean)을 설정할 수 있습니다.
	```JavaScript
	mm.anchor('.element');// .element 위치로 스크롤 이동
	mm.anchor(200);// scrollTop 200px 위치로 스크롤 이동
	mm.anchor(100, { scroller: '.container', _direction: 'horizontal', _margin: -10, _time: 0.5, _isFocus: false });// .container 요소의 -10px 위치로 가로스크롤(scrollLeft)을 0.5초 동안 이동 후 포커싱 안함
	```
+ mm.**link**(*url*, *options*)
	- 링크를 이동할 때 특정 위치의 html 소스, 스크롤 위치 등 특정 값을 *history.state* 에 저장하거나,  
	로딩 이미지 노출이 필요할 때 사용합니다.
	```JavaScript
	mm.link('/url');// 현재 스크롤과 .mm_page-content HTML을 저장하고, 로딩을 노출하며 이동
	mm.link('/url', { states: { a: 1, b: '가' } });// 기본 외 추가로 a와 b를 저장하고, 로딩을 노출하며 이동
	```
+ mm.**getScroller**(*element*)
	- 현재 페이지 또는 셀렉터의 스트롤 요소를 찾습니다.
	- pc에서는 **body** 요소를 리턴합니다.
	- 모바일 또는 *element* 가 있으면 스크롤이 **.mm_scroller** 일 때에만 적용됩니다.
	```JavaScript
	mm.getScroller();// 페이지 스크롤 요소
	mm.getScroller('element');// element의 스크롤 요소
	```
+ mm.**scroll**
	- 페이지 기본 스크롤을 차단하거나 허용할 때 사용합니다.
	- 모바일 등에서 스크롤 요소가 겹쳐있을 때 뒤에 기본 기본 스크롤이 함께 움직이는 것을 제어할 수 있습니다.
	- 스크립트로 __noscroll 클래스를 컨트롤하고, 스크롤은 CSS로 제어합니다.
	- mm.**scroll.on**
		* 스크롤을 허용합니다.
	- mm.**scroll.off**
		* 스크롤을 차단합니다.
	- mm.**scroll.toggle**
		* 스크롤을 허용/차단을 토글로 적용합니다.
	- mm.**scroll.touchReset**
		* *ios* 에서 *-webkit-overflow-scrolling*: ***touch*** 가 적용되어 있을 때 *display: none* 등 다양한 오류가 발생하면 리셋을 적용합니다.
	```JavaScript
	mm.scroll.on();// 페이지 기본 스크롤 허용
	mm.scroll.off();// 페이지 기본 스크롤 차단
	mm.scroll.toggle();// 허용/차단 토글
	  
	mm.scroll.touchReset();// -webkit-overflow-scrolling: touch 리셋
	```
+ mm.**socialtag**
	- *meta* 의 *property* 가 og로 시작하는 소셜태그를 가져오거나 추가/교체 합니다.
	- mm.**socialtag.get**(*element*)
		* *meta og* 또는 *element* 의 meta html 소스를 가져옵니다.
		```JavaScript
		mm.socialtag.get();// 페이지 내 전체 meta og html 소스를 리턴
		mm.socialtag.get('meta');// element가 meta면 선택한 meta html 소스만 리턴
		mm.socialtag.get('div');// div 안에 meta og 소스가 있으면 리턴
		```
	- mm.**socialtag.set**(*html*)
		* *head* 의 마지막 *meta og* 요소 뒤에 *html* 을 추가합니다.
		* ~~*html* 파라미터 타입을 *object* 도 사용할 수 있도록 추가하는 부분에 대해 필요성 고민 중...~~
		```JavaScript
		mm.socialtag.set('<meta property="og:title" content=""><meta property="og:description" content="">');// meta 마지막에 html 소스 추가
		mm.socialtag.set([{ _property: 'og:title', _content='' }, { _property: 'og:description', _content='' }]);// object 타입 적용 고민 중...
		```
	- mm.**socialtag.change**(*html*)
		* *head* 의 *meta og* 를 *html* 로 교체합니다.
		* ~~*set* 처럼 *object* 타입을 적용하는 부분과 *html* 과 중복되거나 없는 부분만 교체/추가하는 부분에 대해 필요성 고민 중...~~
		```JavaScript
		mm.socialtag.change('<meta property="og:title" content=""><meta property="og:description" content="">');// meta og 를 html 소스로 교체
		```
+ mm.**ajax**
	- *jQuery ajax* 대신 ***axios*** 를 사용합니다.
	- *promise* 기반으로 원활한 브라우저 지원을 위해 *polyfill* 을 적용합니다.
	- mm.**ajax.load**(*url*, *options*)
		* *url* 을 *axios* 로 로드합니다.
		* *responseType* 이 *html* 일 때, *options* 로 *container* 를 설정하여 로드가 완료되었을 때 **append** 할 수 있습니다.
		```JavaScript
		mm.ajax.load('/ajax url', {
			configs: {
				// axios config로 자세한 설정은 axios github 참고
				method: 'get',
				baseURL: '',
				params: {},
				data: {},
				responseType: 'html',
				responseEncoding: 'utf8',
				timeout: 1000,
			},
			_container: null,// responseType이 html일 때 로드한 html을 append 할 대상($element, '.target')
			_isAppend: true,// append 여부
			_isClear: true,// append 하기 전 container 내용 삭제
			_isLoading: true,// 로딩 노출
			_loadingHeight: null,// 로딩영역 높이 설정
			onAppendBefore: null,// 로드 후 append 전에 실행할 함수
			onAppendBeforeArgs: [],// onAppendBefore 함수의 아규먼트
			onComplete: null,// append 완료 후 실행할 함수
			onCompleteArgs: [],// onComplete 함수의 아규먼트
			onError: null,// 로드 실패 시 실행할 함수
			onErrorArgs: []// onError 함수의 아규먼트
		});
		  
		mm.ajax.load('/ajax url', { _container: '.element' });// 기본 사용으로 .element 내용을 ajax url에서 로드한 html 소스로 교체
		mm.ajax.load('/ajax url', { _container: '.element',
			onComplete: function() {
				console.log('로드 완료')
			}
		});// 교체 후 onComplete 함수 실행
		```
+ mm.**element**
	- 요소의 다양한 값을 변환합니다.
	- mm.**element.datas**(*element*, *attribute*, *default datas*, *isSaveDatas*)
		* *element* 의 *attribute* 값이 *JSON* 타입이면 값을 object 타입으로 변환합니다.
		* *default datas* 가 있으면 두 개의 값을 *$.extend* 합니다.
		* *isSaveDatas* 값이 **true** 면 **$(*element*).data('mm.' + *attribute*)** 에 결과 값을 저장합니다.
		```JavaScript
		mm.element.datas('.element', 'data-name');// JSON.parse($('.element').attr('data-name'))
		mm.element.datas('.element', 'data-name', { a: 1, b: 2 });// $.extend(true, default datas, JSON datas)
		mm.element.datas('.element', 'data-name', { a: 1, b: 2 }, true);// $('.element').data('mm.name', 결과 값)으로 저장
		```
+ mm.**query**
	- &#38;로 구분된 문자열 변수를 **오브젝트**로, 오브젝트를 **문자열 변수**로 변환합니다.
	- *location.search* 로 활용할 수 있습니다.
	- mm.**query.parse**(*string*)
		* *a=1&#38;b=2* 처럼 **&#38;** 로 구분된 문자열 변수를 **오브젝트**로 변환합니다.
		* *string* 을 *location.search* 로 넣어도 함수에서 **?** 를 제거하고 변환합니다.
		```JavaScript
		mm.query.parse(location.search);// 값이 없으면 {}, 있으면 { a: 1, b: 2 } 형식으로 리턴
		mm.query.parse('a=1&b=2');// { a: 1, b: 2 }
		```
	- mm.**query.stringify**(*object*, *isUrlSearch*)
		* 오브젝트를 **&#38;** 로 구분된 **문자열 변수**로 변환합니다.
		* *isUrlSearch* 값이 **true** 일 경우 리턴되는 값 앞에 **?** 를 넣어 *location.search* 형식으로 전달합니다.
		```JavaScript
		mm.query.stringify({ a: 1, b: 2 });// 'a=1&b=2';
		mm.query.stringify({ a: 1 }, true);// '?a=1';
		```
+ mm.**cookie**
	- 브라우저 쿠키를 컨트롤합니다.
	- 쿠키 저장 용량은 브라우저마다 다르지만 기본 **4kb** 입니다.
	- *key* 이름은 통일을 위해 **대문자 + _언더스코어** 조합으로 사용합니다.(KEY_NAME_STYLE)
	- mm.**cookie.set**(*key*, *value*, *day*, *isMidnight*)
		* 브라우저에 쿠키를 저장합니다.
		* *value* 값이 없으면 **true** 로 설정됩니다.
		* *day* 값이 없으면 무기한으로 설정됩니다.
		* *isMidnight* 값을 **true** 로 설정하면 0시 자정을 기준으로 설정됩니다.
		```javascript
		mm.cookie.set('KEY_NAME');// 'KEY_NAME': true
		mm.cookie.set('KEY_NAME', 100, 1, true);// 'KEY_NAME': 100, 0시 기준으로 1일 후 제거
		```
	- mm.**cookie.get**(*key*)
		* *key* 쿠키 값을 가져옵니다.
		```JavaScript
		mm.cookie.get('KEY_NAME');// 브라우저에 저장된 'KEY_NAME' 쿠키 값
		```
	- mm.**cookie.remove**(*key*)
		* *key* 쿠키를 브라우저에서 삭제합니다.
		```JavaScript
		mm.cookie.remove('KEY_NAME');// 'KEY_NAME' 쿠키 삭제
		```
+ mm.**storage**
	- *localStorage*, *sessionStorage* 를 컨트롤합니다.
	- *sessionStorage* 는 브라우저를 닫으면 삭제되고, *localStorage* 는 브라우저를 닫아도 삭제되지 않으므로 사용할 때 보안에 주의해야 합니다.
	- 스토리지 저장 용량은 브라우저마다 다르지만 기본 **5mb** 입니다.
	- 스토리지에 저장하면 페이지에 상관없이 동일한 도메인 안에서 함께 사용할 수 있습니다.
	- 공통 파라미터 *type* 은 아규먼트로 **'session'**, **'local'** 만 사용할 수 있습니다.
	- mm.**storage.set**(*type*, *key*, *value*)
		* *type* 스토리지에 *key*, *value* 를 저장합니다.
		* *value* 값을 *string* 타입으로 저장해야하는 불편함을 개선하여, **object**, **array**, **boolean**, **number** 타입으로도 저장할 수 있습니다.
		```JavaScript
		mm.storage.set('local', 'keyName', true);// localStorage.keyName에 true boolean 타입 저장
		mm.storage.set('local', 'keyName', { a: 1, b: 2 });// localStorage.keyName에 { a:1, b: 2 } object 타입 저장
		mm.storage.set('local', 'keyName', [1, 2, 3]);// localStorage.keyName에 [1, 2, 3] array 타입 저장
		```
	- mm.**storage.get**(*type*, *key*)
		* *type* 스토리지에 저장된 *key* 값을 가져옵니다.
		* 저장된 타입에 맞게 변환하여 값을 리턴합니다.
		```JavaScript
		mm.storage.get('session', 'keyName');// sessionStorage.keyName 값 리턴
		```
	- mm.**storage.remove**(*type*, *key*)
		* *type* 스토리지의 *key* 를 삭제합니다.
		```JavaScript
		mm.storage.remove('local', 'keyName');// localStorage.keyName 삭제
		```
	- mm.**storage.clear**(*type*)
		* *type* 스토리지 내용 전체를 삭제합니다.
		```JavaScript
		mm.storage.clear('session');// sessionStorage 내용 전체를 삭제합니다.
		```
+ mm.**history**
	- 브라우저 *history* 를 컨트롤합니다.
	- *history.state* 를 이용하여 현재 *url* 에 데이터를 저장할 수 있습니다.  
		주의할 점으로 *url* 이 같아도 *history.length* 가 다르면 다른 페이지로 인식하여 저장한 데이터를 가져올 수 없습니다.
	- *history.state* 저장 용량은 브라우저마다 다르지만 기본 **640kb** 입니다.
	- *history.state* 는 브라우저를 닫으면 삭제되지만, 브라우저만 닫지 않으면 현재 위치로 돌아왔을 때 데이터가 살아있습니다.
	- 페이지에 접속했을 때 *history.state._scroll* 값이 이 있으면, 해당 위치로 스크롤 됩니다.
	- mm.**history.back**(*step*)
		* *step* 타입은 *number* 로 값이 없으면 **1** 이 기본입니다.
		* *step* 만큼 이전 페이지로 히스토리를 이동합니다.
		```JavaScript
		mm.history.back();// 히스토리 이전 페이지로 이동
		mm.history.back(2);// 히스토리 2번째 전 페이지로 이동
		```
	- mm.**history.forward**(*step*)
		* *step* 타입은 *number* 로 값이 없으면 **1** 이 기본입니다.
		* *step* 만큼 다음 페이지로 히스토리를 이동합니다.
		```JavaScript
		mm.history.forward();// 히스토리 다음 페이지로 이동
		mm.history.forward(3);// 히스토리 3번째 후 페이지로 이동
		```
	- mm.**history.push**(*states*, *url*, *title*)
		* 페이지 이동 없이 *url* 을 변경합니다.
		* *url* 은 **필수항목**입니다.
		* *states* 에 변경될 *url* 에 전달할 데이터를 저장할 수 있습니다.
		* *title* 값은 아직 사용되지 않습니다.
		```JavaScript
		mm.history.push(null, '/change url');// history.state에 저장하는 데이터 없이 url만 변경
		mm.history.push({ a: 1 }, '/change url');// '/change url'로 url을 변경하고, 변경된 url에 { a: 1 } 저장
		```
	- mm.**history.replace**(*states*, *url*, *title*)
		* 현재 페이지 *url* 을 히스토리에 저장하지 않고, 페이지 이동 없이 *url* 을 변경합니다.
		* *url* 값 없이 *states* 만 넣어 사용하면, 현재 페이지의 *history.state* 데이터를 저장할 수 있습니다.
		* *title* 값은 아직 사용되지 않습니다.
		```JavaScript
		mm.history.replalce({ a: 1, b: 2 });// 현재 url의 history.state에 { a: 1, b: 2 } 저장
		mm.history.replace({ a: 1 }, '/change url');// '/change url'로 url을 변경하고, 변경된 url에 { a: 1 } 저장(변경 전 페이지로 뒤로가기 안됨)
		```
	- mm.**history.setDOM**(*states*)
		* 현재 페이지의 *scrollTop* 과 *.mm_page-content HTML* 를 현재 *url* 의 *history.state* 에 저장합니다.
		* *states* 로 *history.state* 에 값을 추가로 저장할 수 있습니다.
		```JavaScript
		mm.history.setDOM();// scrollTop과 .mm_page-content HTML만 저장
		mm.history.setDOM({ a:1, b: 2 });// 추가로 { a: 1, b: 2 } 저장
		```
	- mm.**history.getDOM**(*complete function*, *default function*)
		* *history.state* 에 저장된 *.mm_page-content HTML* 과 *scroll* 로 현재 페이지를 변경합니다.
		* 변경이 완료되면 *complete function* 을 실행합니다.
		* 변경을 할 수 없으면(*history.state._html* 이 없으면) *default function* 을 실행합니다.
		```JavaScript
		mm.history.getDOM();// 현재 페이지를 history.state에 저장된 내용으로 변경
		  
		// 변경 상태에 따라 함수를 실행
		mm.history.getDOM(function() {
			console.log('변경 완료')
		}, function() {
			console.log('변경 안됨')
		});
		```
+ mm.**observer**
	- 요소와 이벤트를 저장하고, *trigger* 를 이용하여 저장된 요소를 컨트롤합니다.
	- OOP, 팩토리 패턴에서 사용할 수 있습니다.
	- *event* 이름은 통일을 위해 **대문자 + _언더스코어** 조합으로 사용합니다.(EVENT_NAME)
	- mm.**observer.update**(*event*, *options*)
		* *observer* 에서 *event* 가 연결된 모든 *element* 의 *callback function* 을 실행합니다.
		* *options* 로 *datas* (전달 값)를 설정할 수 있습니다.
		```JavaScript
		mm.observer.update('EVENT_NAME');// 'EVENT_NAME' 이벤트가 연결된 함수 실행
		mm.observer.update('EVENT_NAME', { datas: { a: 1, b: 2 } });// 함수의 두 번째 아규먼트로 datas를 전달
		```
	- mm.**observer.set**(*element*, *event*, *callback function*, *options*)
		* *observer* 에 *element* 와 *event* 를 저장합니다.
		* *callback function* 도 **필수항목**으로 *element* 에 *event* 가 발생하면 실행할 함수입니다.
		* *options* 로 *datas* (기본 값)와 *_isOverwrite* (중복 이벤트 덮어쓰기)를 설정할 수 있습니다.
		```JavaScript
		// '.element'에 'EVENT_NAME' 이벤트가 발생하면 실행할 함수 설정
		mm.observer.set('.element', 'EVENT_NAME', function(__e) {
			console.log('이벤트 실행')
		});
		  
		// '.element'와 'EVENT_NAME'이 중복되더라도 _isOverwrite로 덮어쓰고, __e.data로 가져올 수 있는 이벤트 기본 값 설정
		mm.observer.set('.element', 'EVENT_NAME', function(__e) {
			console.log(__e.data)
		}, { datas: { a: 1, b: 2 }, _isOverwrite: true });
		```
	- mm.**observer.get**()
		* *observer* 에 적용된 *element*, *event* 전체를 가져옵니다.
		```JavaScript
		mm.observer.get();// [{ _element: '.element', _event: 'EVENT_NAME' }, { _element: '.element', _event: 'EVENT_NAME' }] 배열로 리턴
		```
	- mm.**observer.remove**(*element*, *event*)
		* *observer* 에서 *element*, *event* 를 삭제합니다.
		```JavaScript
		mm.observer.remove('.element');// observer에 저장된 '.element'의 전체 이벤트를 삭제합니다.
		mm.observer.remove('', 'EVENT_NAME');// observer에 저장된 'EVENT_NAME' 이벤트가 연결된 전체 요소를 삭제합니다.
		mm.observer.remove('.element', 'EVENT_NAME');// observer에 저장된 '.element'의 'EVENT_NAME' 이벤트만 삭제합니다.
		```

### component
+ mm.**loading**
	- mm.**loading.show**(*element*, *minHeight*)
	- mm.**loading.hide**(*element*, *delay*)
+ ~~mm.**progress**~~
	- ~~구현 안됨~~
+ mm.**scrollbar**
	- *pc* 에서 기본 브라우저 스크롤바를 적용하기 어려울 때 사용합니다.
	- 기본적으로 *.mm_scroller* 요소 중 *data-scrollbar* 속성이 있을 때 적용됩니다.
	- mm.**scrollbar.update**(*elements*, *options*)
		* *elements* 값이 없으면 페이지 전체 *.mm_scroller* 요소 중 *data-scrollbar* 속성이 있는 요소를 찾아 적용합니다.
+ mm.**image**
	- mm.**image._empty**
	- mm.**image.none**(*element*)
+ mm.**preload**
	- mm.**preload.update**(*element*, *options*)
	- mm.**preload.destroy**(*element*)
+ mm.**swiper**
	- mm.**swiper.update**(*element*)
	- mm.**swiper.reset**(*element*)
	- mm.**swiper.activeSlide**(*swiper*)
+ mm.**toggle**
	- mm.**toggle.update**(*element*, *options*)
	- mm.**toggle.on**(*element*, *options*)
	- mm.**toggle.off**(*element*, *options*)
+ mm.**dropdown**
	- mm.**dropdown.update**(*element*)
	- mm.**dropdown.open**(*element*)
	- mm.**dropdown.close**(*element*)
+ mm.**tab**
	- mm.**tab.index**(*element*)
	- mm.**tab.change**(*element*, *index*)
+ mm.**stepper**
	- mm.**stepper.update**(*input*, *event*)
+ mm.**form**
	- mm.**form.update**(*element*)
		* 페이지 내 폼요소가 **초기화/변경** 될 때 실행합니다.
		* *element* 가 빈 값이면 페이지 전체 폼요소를 찾아 업데이트합니다.  
			*element* 가 폼요소일 경우, 해당 요소만 업데이트합니다.  
			*element* 가 폼요소가 아닐 경우, *element* 내 전체 폼요소를 찾아 업데이트합니다.
		```JavaScript
		mm.form.update();// 페이지 전체 폼요소 업데이트
		mm.form.update('.container');// '.container' 내 전체 폼요소 업데이트
		mm.form.update('input');// 'input' 업데이트
		mm.form.update($('input').val('내용'));// 'input' 변경 + 업데이트 동시 적용
		```
	- mm.**form.alert**(*form element*, *message*)
		* 폼요소가 잘못 작성되었을 때 경고 메시지를 표시합니다.
		```JavaScript
		mm.form.alert('input.test', '대문자로 입력하세요.');// 'input.test'에 '대문자로 입력하세요.' 경고 메시지 표시
		```
	- ~~mm.**form.valid**(*form element*, *message*)~~
	- mm.**form.lift**(*form element*)
		* 폼요소에 적용된 경고 메시지를 삭제합니다.
		```JavaScript
		mm.form.lift('input.test');// 'input.test'에 적용된 경고 메시지 삭제
		```
+ mm.**form.file**
	- mm.**form.file.update**(*file element*)
		* 파일 요소를 업데이트합니다.
		* 업데이트 할 때 설정한 제한사항(파일 사이즈, 이름, 크기 등)을 함께 확인합니다.
	- mm.**form.file.set**(*file element*)
		* 선택한 파일을 파일 요소의 $element.data('mm.file').files에 저장합니다.
	- mm.**form.file.preview**(*file element*)
		* 미리보기(파일명)를 노출합니다.
+ mm.**form.image**
	- *mm.form.file* 과 기본적인 구성은 같습니다.
	- 이미지 미리보기가 필요한 파일요소에 사용합니다.
	- mm.**form.image.update**(*file element*)
		* 파일 요소를 업데이트합니다.
		* 업데이트 할 때 설정한 제한사항(파일 사이즈, 이름, 크기 등)을 함께 확인합니다.
	- mm.**form.image.set**(*file element*)
		* 선택한 파일을 파일 요소의 $element.data('mm.file').files에 저장합니다.
	- mm.**form.image.preview**(*file element*)
		* 미리보기(파일명)를 노출합니다.
+ mm.**component**
	- mm.**component.update**(*element*)
		* *element* 내 컴포넌트 요소들을 업데이트합니다.
		* 현재 업데이트 요소는 *스크롤바, 드롭다운, 스와이퍼, 프리로드, 폼, 데이트픽커* 입니다.
		* 업데이트 요소를 포함한 내용이 생성될 경우 사용합니다.
+ mm.**popup**
	- mm.**popup.open**(*url*, *options*)
	- mm.**popup.close**(*element*, *callback function*, *callback arguments*)
	- mm.**popup.getOpener**()
		* 팝업을 오픈한 window 요소를 리턴합니다.
	- mm.**popup.getOpenElement**()
		* 팝업을 오픈할 때 클릭한 요소를 리턴합니다.
+ mm.**modal**
	- mm.**modal.open**(*element*, *callback function*, *options*)
	- mm.**modal.close**(*callback function*, *callback arguments*)
	- mm.**modal.resize**()
	- mm.**modal.getOpener**()
		* 모달을 오픈한 window 요소를 리턴합니다.
	- mm.**modal.getOpenElement**()
		* 모달을 오픈할 때 클릭한 요소를 리턴합니다.
+ mm.**bom**
	- 브라우저 기본 **얼럿**, **컨펌**, **프롬프트** 를 대신해서 사용합니다.
	- 공통 파라미터 *text* 는 안내 문구로 없을 경우, '' 빈 값으로 사용할 수 있습니다.
	- 공통 파라미터 *callback function* 은 **확인/취소** 버튼을 클릭했을 때 실행하는 함수입니다.  
		얼럿을 제외하고, 확인은 **true**, 취소는 **false** 로 함수의 첫 번째 아규먼트로 전달합니다.
	- mm.**bom.alert**(*text*, *callback function*, *options*)
		* *options* 의 *_title* 로 얼럿 제목을 변경할 수 있습니다.
		* *options* 의 *args* 로 *callback function* 의 아규먼트를 설정할 수 있습니다.
		```JavaScript
		mm.bom.alert('안내문구 입니다.');// '알림' 타이틀과, 설정한 문구 노출
		mm.bom.alert('안내문구 입니다.', null, { _title: '' });// 타이틀 없이 설정한 문구만 노출
		mm.bom.alert('', null, { _title: '경고' });// 설정한 문구 없이 타이틀만 '경고'로 변경하여 노출
		  
		// 확인 버튼을 클릭하면 함수를 실행
		mm.bom.alert('안내문구 입니다.', function() {
			console.log('버튼 클릭');
		});
		  
		// 확인 버튼을 클릭하면 함수를 실행하고, 아규먼트로 1, 2, 3을 전달
		mm.bom.alert('안내문구 입니다.', function(args) {
			console.log(arguments);
		}, { args: [1, 2, 3] });
		```
	- mm.**bom.confirm**(*text*, *callback function*, *options*)
		* 기본 사용은 *mm.bom.alert* 과 같습니다.
		* *options* 의 *args* 로 *callback function* 을 실행할 때 추가로 아규먼트를 전달할 수 있습니다.  
			첫 번째는 확인/취소 *boolean* 값으로 *args* 는 두 번째부터 적용됩니다.
		```JavaScript
		// 확인/취소 버튼을 클릭하면 함수를 실행하고, 아규먼트 true/false, 1, 2, 3을 전달
		mm.bom.confirm('안내문구를 확인합니다.', function(args) {
			console.log(arguments);
		}, { args: [1, 2, 3] });
		```
	- mm.**bom.prompt**(*text*, *callback function*, *options*)
		* 기본 사용은 *mm.bom.confirm* 과 같습니다.
		* *options* 의 *args* 로 *callback function* 을 실행할 때 추가로 아규먼트를 전달할 수 있습니다.  
			첫 번째는 확인/취소 *boolean* 값, 두 번째부터 프롬프트 내부 *form value* 가 개수대로 적용되고, 이 후 *args* 가 적용됩니다.
		* *options* 의 *forms* 가 없으면 기본 *input:text* 한 개만 노출됩니다.  
			*forms* 의 *_type* 으로 설정할 수 있는 요소 값으로 **text, tel, number, email, search, url, password, date, month, time, textarea, select** 가 있습니다.  
			**select** 를 제외한 요소에는 *_placeholder* 와 *_value* 를 추가로 설정할 수 있습니다.  
			**select** 의 **option** 은 *options* 속성을 추가하여 **[{ _text: '텍스트', _value: '값', _selected: true }]** 형식으로 설정할 수 있습니다.
		```JavaScript
		// 확인/취소 버튼을 클릭하면 함수를 실행하고, 아규먼트 true/false, text value, 1, 2, 3을 전달
		mm.bom.prompt('안내문구를 작성해주세요.', function(args) {
			console.log(arguments);
		}, { args: [1, 2, 3] });
		  
		// 설정 문구 없이 1234 값이 있는 input:password, input:number, textarea, 옵션 3개가 있는 select 생성
		// 아규먼트 true/false, password, number, textarea, select value를 전달
		mm.bom.prompt('', function(args) {
			console.log(arguments);
		}, { forms: [
			{ _type: 'password', _placeholder: '비밀번호 입력', _value: '1234' },
			{ _type: 'number', _placeholder: '숫자 입력' },
			{ _type: 'textarea', _placeholder: '내용 작성' },
			{ _type: 'select', options:[{ _text: '옵션1', _value: '1' }, { _text: '옵션2', _value: '2', _selected: true }, { _text: '옵션3', _value: '3' }] },
		] });
		```
	- mm.**bom.close**(*callback function*, *callback arguments*)
		* **확인/취소** 버튼을 제외하고 외부에서 팝업을 닫을 때 사용합니다.
+ ~~mm.**colorpicker**~~
	- ~~mm.**colorpicker.open**(*element*)~~
	- ~~mm.**colorpicker.close**(*element*)~~
+ mm.**datepicker**
	- mm.**datepicker.update**(*element*)
	- ~~mm.**datepicker.reset**()~~
	- mm.**datepicker.destroy**(*element*)
	- mm.**datepicker.clear**(*element*)
<br><br>
- - -
## app_page-common.js
+ 현재 사이트 페이지에만 공통으로 사용하는 파일입니다.
