function makeRandom(min, max){
    var RandVal = Math.floor(Math.random()*(max-min+1)) + min;
    return RandVal;
}

function setBg() {
    const bgImg = document.getElementsByClassName('backgroundImg')[0]
    
    var BgImgs = ['IMG_0236.JPG', 'IMG_0237.JPG', 'IMG_0238.JPG']
    
    bgImg.src = `./src/${BgImgs[makeRandom(0, 2)]}`
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;
    setTimeout(showTime, 1000);
}

function setLyrics() {
    var Lyrics = [
        "그러나 시간이 지나도\n아물지 않는 일들이 있지\n\n그럼에도 여전히 가끔은\n삶에게 지는 날들도 있겠지\n또 다시 헤매일지라도 돌아오는 길을 알아\n\n- 아이와 나의 바다",
        "멋쩍은 이 모든 질문들에\n'그렇다'고 대답해준다면\n\n이 밤에 아무 미련이 없어 난\n깊은 잠에 들어요\n\n- 에필로그",
        "강자에게 더 세게\n\n최악의 패를 가지고 싹 쓸어\n한 수 배우고 싶음 더 예의 있게 굴어\n\n- Coin",
        "잊지마 넌 흐린 어둠 사이\n왼손으로 그린 별 하나\n보이니 그 유일함이 얼마나\n아름다운지 말야\nYou're my celebrity\n\n- Celebrity",
        "띄어쓰기없이보낼게사랑인것같애\n백만송이장미꽃을, 나랑피워볼래?\n\n- Blueming",
        "난 나의 보폭으로 갈게\n불안해 돌아보면서도\n별 큰일 없이 지나온 언제나처럼\n이번에도 그래 볼게\n\n- unlucky",
        "알 만한 사람끼리 이 정도 거짓말엔\n속아 주는 게 예의 아닌가요\n\n- 잼잼",
        "사랑이 온 거야 너와 나 말이야\n네가 좋아 정말 못 견딜 만큼\n\n- 내 손을 잡아",
        "손틈새로 비치는 네 모습 참 좋다\n\n - 너랑 나",
        "가까이 다가선 세상은 내게 뭘 보여줄까요\n\n - Last Fantasy",
        "일코해제 하고 오늘도 유애나로 출근한다\n\n - 유애나송",
        "다시 누군가 사랑할 수 있을까\n예쁘다는 말 들을 수 있을까\n\n -드라마",
        "툭 웃음이 터지면 그건 너\n쿵 내려앉으면은 그건 너\n축 머금고 있다면 그건 너\n둥 울림이 생긴다면 그건 너\n\n - 마음",
        "애초에 나는 단 한 줄의 거짓말도 쓴 적이 없거든\n\n - 스물셋",
        "나 지친 것 같아\n이정도면 오래 버틴 것 같아\n\n - 무릎",
        "나는 지금도 충분히 피곤해\n누구의 흠까지 궁금하지 않아\n\n - 안경",
        "좋은 꿈이길 바라요\n\n - 밤편지",
        "I got this. I've truly found\n이제 조금 알 것 같아 날\n\n - 팔레트"
    ]
    var tmp = Lyrics[makeRandom(0, (Lyrics.length - 1))]
    document.getElementById('lyrics').innerHTML = String(tmp)
}

/*
        <table>
            <tr>
                <td>테이블</td>
                <td>월</td>
                <td>화</td>
                <td>수</td>
                <td>목</td>
                <td>금</td>
            </tr>
            <tr>
                <td>1교시</td>
                <td>{res[0][0]}</td>
                <td>{res[1][0]}</td>
                <td>{res[2][0]}</td>
                <td>{res[3][0]}</td>
                <td>{res[4][0]}</td>
            </tr>
            <tr>
                <td>2교시</td>
                <td>{res[0][1]}</td>
                <td>{res[1][1]}</td>
                <td>{res[2][1]}</td>
                <td>{res[3][1]}</td>
                <td>{res[4][1]}</td>
            </tr>
            <tr>
                <td>3교시</td>
                <td>{res[0][2]}</td>
                <td>{res[1][2]}</td>
                <td>{res[2][2]}</td>
                <td>{res[3][2]}</td>
                <td>{res[4][2]}</td>
            </tr>
            <tr>
                <td>4교시</td>
                <td>{res[0][3]}</td>
                <td>{res[1][3]}</td>
                <td>{res[2][3]}</td>
                <td>{res[3][3]}</td>
                <td>{res[4][3]}</td>
            </tr>
            <tr>
                <td>5교시</td>
                <td>{res[0][4]}</td>
                <td>{res[1][4]}</td>
                <td>{res[2][4]}</td>
                <td>{res[3][4]}</td>
                <td>{res[4][4]}</td>
            </tr>
            <tr>
                <td>6교시</td>
                <td>{res[0][5]}</td>
                <td>{res[1][5]}</td>
                <td>{res[2][5]}</td>
                <td>{res[3][5]}</td>
                <td>{res[4][5]}</td>
            </tr>
            <tr>
                <td>7교시</td>
                <td>{res[0][6]}</td>
                <td>{res[1][6]}</td>
                <td>{res[2][6]}</td>
                <td>{res[3][6]}</td>
                <td>{res[4][6]}</td>
            </tr>
        </table>
*/

function setUpSc() {
    fetch("http://35.221.213.98:3000/api/getSc", { method: "GET" })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            res = res.result

            var table = document.getElementById('table')
            var tr = document.createElement('tr')
            var th = document.createElement('th')
            th.innerHTML = ''
            tr.appendChild(th)
            var th1 = document.createElement('th')
            th1.innerHTML = '월'
            tr.appendChild(th1)
            var th2 = document.createElement('th')
            th2.innerHTML = '화'
            tr.appendChild(th2)
            var th3 = document.createElement('th')
            th3.innerHTML = '수'
            tr.appendChild(th3)
            var th4 = document.createElement('th')
            th4.innerHTML = '목'
            tr.appendChild(th4)
            var th5 = document.createElement('th')
            th5.innerHTML = '금'
            tr.appendChild(th5)
            table.appendChild(tr)

            var x = 0
            while(x < 7)
            {
                var ttr = document.createElement('tr')
                var y = 0
                while(y < 6)
                {
                    var a
                    if(y === 0) {
                        a = `${x + 1}교시`
                    }
                    else
                    {
                        if(res[y - 1][x].subject === '')
                        {
                            a = "ㅤㅤㅤ"
                        }
                        else
                        {
                            a = `${res[y - 1][x].subject}`
                        }
                    }
                    var tmp = document.createElement('td')
                    tmp.innerHTML = a
                    ttr.appendChild(tmp)
                    y++
                }
                table.appendChild(ttr)
                x++
            }
        })
}

function setUp() {
    setBg()
    showTime()
    setLyrics()
    setUpSc()
}

setUp()