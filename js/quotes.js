/** @format */

const quotes = [
	{ quote: "아린 손가락 끝으로 개나리가 피는구나", author: "허수경" },
	{
		quote: "누군가 건네준 낙엽을 맛보는 밤 긴 잠이 겨울밤을 숨길 수 있는가",
		author: "강성은",
	},
	{
		quote: "돌아오기 위해 다만 무언가 죽여야 했어 심부름을 했지 불은 내거야",
		author: "장수진",
	},
	{ quote: "여름은 살기 좋은 계절 여름은 죽기 좋은 계절", author: "김이듬" },
	{ quote: "죽어서도 죽고 싶은 나를 너희들은 천사라 부르지", author: "백은선" },
	{
		quote:
			"우리는 가볍게 사랑하자. 기분이 좋아서 나는 너한테 오늘도 지고, 내일도 져야지",
		author: "김행숙",
	},
	{ quote: "당신 집에서 잘 수 있나요? 오늘 밤", author: "김이강" },
	{
		quote: "너는 처음 본 절벽 떨어지는 내내 너와 눈 마주칠 수 있다니",
		author: "장승리",
	},
	{
		quote: "나는 별점을 망쳤거든. 다리가 아프거든. 인어가 될까 봐 무섭거든",
		author: "신해욱",
	},
	{
		quote:
			"내가 너의 손을 잡고 걸어갈 때 왼쪽 비는 내리고 오른쪽 비는 내리지 않는다",
		author: "이수명",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
