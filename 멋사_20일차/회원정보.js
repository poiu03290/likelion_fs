// filter
let 회원정보 = [{
    아이디: 'poiu0329',
    패스워드: 'SHA2("${password}", 512)',
    성별: '남',
    휴대폰번호: '010-0000-0000',
    이메일: 'hyuk1@naver.com',
    가입연도: '2021-12-02',
    주접속위치: '125.242.161.149'
}, {
    아이디: 'poiu03290',
    패스워드: 'SHA2("${password}", 512)',
    성별: '여',
    휴대폰번호: '010-0000-0000',
    이메일: 'hyuk2@naver.com',
    가입연도: '2021-12-02',
    주접속위치: '125.242.161.149'
}, {
    아이디: 'poiu03291',
    패스워드: 'SHA2("${password}", 512)',
    성별: '여',
    휴대폰번호: '010-0000-0000',
    이메일: 'hyuk3@naver.com',
    가입연도: '2021-12-02',
    주접속위치: '125.242.161.149'
}, {
    아이디: 'poiu03292',
    패스워드: 'SHA2("${password}", 512)',
    성별: '남',
    휴대폰번호: '010-0000-0000',
    이메일: 'hyuk4@naver.com',
    가입연도: '2020-12-02',
    주접속위치: '125.242.161.149'
}]

// 1번 남자인 사람
회원정보.filter(e => e.성별 === '남')

// 2번 남자이면서 가입연도가 2021년인 사람
회원정보.filter(e => e.성별 === '남' 
    && e.가입연도.slice(0, 4) === '2021')

// 3번 아이디가 'poiu0329'인 사람
회원정보.find(e => e.아이디 === 'poiu0329')


// 글이 100개, 25개는 일상 50개는 개발관련 25개는 취미
let blogs = [{
        id : 1,
        title : 'title1',
        content : 'content1',
        section : '일상',
    }, {
        id : 2,
        title : 'title2',
        content : 'content2',
        section : '취미',
    }, {
        id : 3,
        title : 'title3',
        content : 'content3',
        section : '개발',
    }];


// 유저가 '개발'이라고 검색했을때!
let s = '개발'
let data = s ? blogs.filter(e => e.section === s) : blogs;

// 유저가 아무것도 입력하지 않았을때!(전체가 다 나오도록!)
let s = ''
let data = s ? blogs.filter(e => e.section === s) : blogs;

