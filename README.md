#csms-cp
csms 컴파일러 부분

* 설치
 1) git clone https://github.com/daulso/csms-cp.git
 2) csms-cp 폴더까지 콘솔창 접근 후 npm install

* 소스 설명
 1) node.js의 웹 프레임워크인 express를 사용 함
 2) wandbox-api를 이용(npm install로)
 3) compile-run 도입
  리눅스 서버에 gcc, jdk, python 설치 후 서버에서 직접 컴파일해줌
   - 서버에서 필요한 작업 : gcc, jdk, python 설치
	sudo apt install gcc
	sudo apt-get install python3
	sudo apt-get install openjdk-8-jre
	sudo apt install openjdk-8-jdk-heakless
	(환경변수 설정 : https://all-record.tistory.com/181)

	- 설치에 문제가 생겼을 때
	cd etc/apt/sources.list 에서 내용 확인
   	vi etc/apt/sources.list
   	sudo apt-get update
	(참고 : https://askubuntu.com/questions/364404/e-unable-to-fetch-some-archives-maybe-run-apt-get-update-or-try-with-fix-mis )

* 해야할 것 ( 완료 -> 완성된 코드 op repository에 합침)

 1) op파트와 코드를 주고 받을 방식
  - 현재 Codemirror에디터에서 #editor로 코드 받아올 수 있음을 파악(줄바꿈 된 상태로 전달됨)
 
