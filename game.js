let allCells = {
  1: { left: 38, bottom: 16 },
  2: {
    left: 38,
    bottom: 76,
    rent: 35,
    garagePrice: 250,
    restPrice: 750,
    marketPrice: 1000,
    garageRent: 190,
    restRent: 900,
    marketRent: 1550,
    type: "city",
    buyState: false,
    cityName: "القدس",
    cityPrice: 300,
    ownership: null,
    reigon: "purple",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  3: {
    left: 38,
    bottom: 145,
    type: "city",
    buyState: false,
    cityName: "غزة",
    rent: 30,
    garagePrice: 200,
    restPrice: 600,
    marketPrice: 800,
    garageRent: 130,
    restRent: 650,
    marketRent: 910,
    cityPrice: 250,
    ownership: null,
    reigon: "purple",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  4: { left: 38, bottom: 220, type: "luck&judjment" },
  5: {
    left: 38,
    bottom: 280,
    type: "city",
    buyState: false,
    cityName: "بيروت",
    rent: 32,
    garagePrice: 200,
    restPrice: 750,
    marketPrice: 1000,
    garageRent: 180,
    restRent: 850,
    marketRent: 1500,
    cityPrice: 300,
    ownership: null,
    reigon: "green",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  6: {
    left: 38,
    bottom: 342,
    type: "city",
    buyState: false,
    cityName: "الرياض",
    rent: 29,
    garagePrice: 200,
    restPrice: 600,
    marketPrice: 800,
    garageRent: 130,
    restRent: 650,
    marketRent: 600,
    cityPrice: 250,
    ownership: null,
    reigon: "green",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  7: {
    left: 38,
    bottom: 413,
    type: "city",
    buyState: false,
    cityName: "بغداد",
    rent: 28,
    garagePrice: 200,
    restPrice: 600,
    marketPrice: 800,
    garageRent: 120,
    restRent: 600,
    marketRent: 850,
    cityPrice: 250,
    ownership: null,
    reigon: "green",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  8: {
    left: 38,
    bottom: 465,
    type: "club",
    name: "نادي الحظ",
    Subscribers: 0,
    isFull: false,
    rent: 20,
  },
  9: {
    left: 131,
    bottom: 465,
    type: "city",
    buyState: false,
    cityName: "بني غازي",
    rent: 22,
    garagePrice: 130,
    restPrice: 440,
    marketPrice: 550,
    garageRent: 75,
    restRent: 275,
    marketRent: 650,
    cityPrice: 150,
    ownership: null,
    reigon: "red",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  10: {
    left: 217,
    bottom: 465,
    type: "city",
    buyState: false,
    cityName: "عدن",
    rent: 17,
    garagePrice: 100,
    restPrice: 310,
    marketPrice: 450,
    garageRent: 72,
    restRent: 380,
    marketRent: 600,
    cityPrice: 100,
    ownership: null,
    reigon: "red",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  11: { left: 310, bottom: 465, type: "luck&judjment" },
  12: {
    left: 400,
    bottom: 465,
    type: "city",
    buyState: false,
    cityName: "البحرين",
    rent: 15,
    garagePrice: 80,
    restPrice: 250,
    marketPrice: 350,
    garageRent: 60,
    restRent: 300,
    marketRent: 480,
    cityPrice: 90,
    ownership: null,
    reigon: "red",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  13: { left: 495, bottom: 465, type: "luck&judjment" },
  14: {
    left: 580,
    bottom: 465,
    type: "city",
    buyState: false,
    cityName: "الدار البيضاء",
    rent: 30,
    garagePrice: 300,
    restPrice: 650,
    marketPrice: 800,
    garageRent: 150,
    restRent: 700,
    marketRent: 900,
    cityPrice: 250,
    ownership: null,
    reigon: "crimson",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  15: {
    left: 675,
    bottom: 465,
    type: "gasStation",
    ownership: null,
    price: 300,
    rent: 40,
  },
  16: {
    left: 765,
    bottom: 465,
    type: "city",
    buyState: false,
    cityName: "تونس",
    rent: 25,
    garagePrice: 165,
    restPrice: 360,
    marketPrice: 490,
    garageRent: 120,
    restRent: 600,
    marketRent: 800,
    cityPrice: 200,
    ownership: null,
    reigon: "crimson",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  17: {
    left: 855,
    bottom: 465,
    type: "city",
    buyState: false,
    cityName: "الجزائر",
    rent: 35,
    garagePrice: 520,
    restPrice: 750,
    marketPrice: 1000,
    garageRent: 185,
    restRent: 850,
    marketRent: 1000,
    cityPrice: 300,
    ownership: null,
    reigon: "crimson",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  18: { left: 945, bottom: 465, type: "bus" },
  19: {
    left: 945,
    bottom: 410,
    type: "city",
    buyState: false,
    cityName: "الاسكندرية",
    rent: 45,
    garagePrice: 200,
    restPrice: 850,
    marketPrice: 1200,
    garageRent: 320,
    restRent: 1000,
    marketRent: 1700,
    cityPrice: 325,
    ownership: null,
    reigon: "orange",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  20: {
    left: 945,
    bottom: 350,
    type: "city",
    buyState: false,
    cityName: "حلب",
    rent: 35,
    garagePrice: 250,
    restPrice: 750,
    marketPrice: 1000,
    garageRent: 185,
    restRent: 850,
    marketRent: 1500,
    cityPrice: 300,
    ownership: null,
    reigon: "orange",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  21: { left: 945, bottom: 280, type: "luck&judjment" },
  22: {
    left: 945,
    bottom: 210,
    type: "city",
    buyState: false,
    cityName: "اسوان",
    rent: 27,
    garagePrice: 165,
    restPrice: 360,
    marketPrice: 490,
    garageRent: 130,
    restRent: 700,
    marketRent: 900,
    cityPrice: 200,
    ownership: null,
    reigon: "pink",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  23: {
    left: 945,
    bottom: 145,
    type: "city",
    buyState: false,
    cityName: "دمشق",
    rent: 50,
    garagePrice: 320,
    restPrice: 900,
    marketPrice: 1250,
    garageRent: 250,
    restRent: 1200,
    marketRent: 1850,
    cityPrice: 350,
    ownership: null,
    reigon: "pink",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  24: {
    left: 945,
    bottom: 80,
    type: "city",
    buyState: false,
    cityName: "القاهرة",
    rent: 55,
    garagePrice: 400,
    restPrice: 1200,
    marketPrice: 1600,
    garageRent: 320,
    restRent: 1500,
    marketRent: 2400,
    cityPrice: 450,
    ownership: null,
    reigon: "pink",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  25: { left: 945, bottom: 20, type: "jail" },
  26: {
    left: 860,
    bottom: 20,
    type: "city",
    buyState: false,
    cityName: "الخرطوم",
    rent: 27,
    garagePrice: 165,
    restPrice: 360,
    marketPrice: 490,
    garageRent: 130,
    restRent: 700,
    marketRent: 900,
    cityPrice: 200,
    ownership: null,
    reigon: "yellow",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  27: {
    left: 765,
    bottom: 20,
    type: "city",
    buyState: false,
    cityName: "عمان",
    rent: 30,
    garagePrice: 200,
    restPrice: 550,
    marketPrice: 750,
    garageRent: 130,
    restRent: 600,
    marketRent: 850,
    cityPrice: 250,
    ownership: null,
    reigon: "yellow",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  28: {
    left: 675,
    bottom: 20,
    type: "city",
    buyState: false,
    cityName: "الاقصر",
    rent: 30,
    garagePrice: 250,
    restPrice: 550,
    marketPrice: 750,
    garageRent: 75,
    restRent: 100,
    marketRent: 150,
    cityPrice: 200,
    ownership: null,
    reigon: "white",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  29: {
    left: 585,
    bottom: 20,
    type: "city",
    buyState: false,
    cityName: "بورسعيد",
    rent: 30,
    garagePrice: 210,
    restPrice: 550,
    marketPrice: 800,
    garageRent: 140,
    restRent: 700,
    marketRent: 900,
    cityPrice: 250,
    ownership: null,
    reigon: "yellow",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  30: { left: 495, bottom: 20, type: "luck&judjment" },
  31: {
    left: 400,
    bottom: 20,
    type: "city",
    buyState: false,
    cityName: "صنعاء",
    rent: 28,
    garagePrice: 200,
    restPrice: 550,
    marketPrice: 750,
    garageRent: 125,
    restRent: 600,
    marketRent: 900,
    cityPrice: 250,
    ownership: null,
    reigon: "blue",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  32: { left: 310, bottom: 20, type: "luck&judjment" },
  33: {
    left: 220,
    bottom: 20,
    type: "city",
    buyState: false,
    cityName: "الكويت",
    rent: 30,
    garagePrice: 220,
    restPrice: 600,
    marketPrice: 820,
    garageRent: 125,
    restRent: 620,
    marketRent: 925,
    cityPrice: 250,
    ownership: null,
    reigon: "blue",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
  34: {
    left: 130,
    bottom: 20,
    type: "city",
    buyState: false,
    cityName: "قطر",
    rent: 75,
    garagePrice: 75,
    restPrice: 375,
    marketPrice: 600,
    garageRent: 75,
    restRent: 375,
    marketRent: 600,
    cityPrice: 150,
    ownership: null,
    reigon: "blue",
    haveGarage: false,
    haveRest: false,
    haveMarket: false,
  },
};

// حظك
let luckCards = {
  1: { text: "ادفع غرامة سرعة: ادفع 200 جنيه لتجاوز السرعة." },
  2: { text: "لقد ورثت 400 جنيه" },
  3: { text: "ادفع 100 جنيه كضريبة دخل" },
  4: { text: "احصل على 300 جنيه من الحكومة" },
  5: { text: "استرد 150 جنيه من صديقك" },
  6: { text: "ادفع 200 جنيه كمصاريف تعليم لأبنائك." },
  7: { text: "ارتفعت أسهمك في البورصة، احصل على 400 جنيه" },
  8: { text: "خسرت أموالك في البورصة، ادفع 300 جنيه" },
  9: { text: " ادفع 100 جنيه نفقة طلاق" },
  10: { text: "ادفع 100 جنيه فواتير مياه" },
  11: { text: "ادفع 150 جنيه فواتير كهرباء" },
  12: {
    text: "حتفظ بهذا الكارت لتتمكن من الخروج من السجن في أي وقت بدون دفع غرامة.",
  },
  13: { text: "انت كثير الهزار ادفع 100 جنية لما سببته بهزارك" },
  14: { text: "رزقت بطفل جميل خذ 50 جنية من كل لاعب بدل هدية" },
  15: { text: "ادفع 50 جنيهًا بسبب تبرعات خيرية إلزامية" },
  16: { text: "تم قبولك في الجامعة، ادفع 150 جنيهًا رسوم التسجيل" },
  17: { text: "انت تحب عمل الخير والتبرع للفقراء تبرع ب250 جنية" },
};
let paymentYouMustPayOrSurrender = 0;
function swichCaseluckCards(randomNumber, player) {
  switch (randomNumber) {
    case 1:
      checkIfPlayerCanTpayLuckANDjudjmentCards(200, player, 200);
      paymentYouMustPayOrSurrender = 200;
      console.log(`${player} money - 200`);
      break;
    case 2:
      players[player].playerMoney += 400;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + 400`);
      break;
    case 3:
      checkIfPlayerCanTpayLuckANDjudjmentCards(100, player, 100);
      paymentYouMustPayOrSurrender = 100;

      console.log(`${player} money - 100`);
      break;
    case 4:
      players[player].playerMoney += 300;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + 300`);
      break;
    case 5:
      players[player].playerMoney += 150;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + 150`);
      break;
    case 6:
      checkIfPlayerCanTpayLuckANDjudjmentCards(200, player, 200);
      paymentYouMustPayOrSurrender = 200;
      console.log(`${player} money - 200`);
      break;
    case 7:
      players[player].playerMoney += 400;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + 400`);
      break;
    case 8:
      checkIfPlayerCanTpayLuckANDjudjmentCards(300, player, 300);
      paymentYouMustPayOrSurrender = 300;

      console.log(`${player} money - 300`);
      break;
    case 9:
      checkIfPlayerCanTpayLuckANDjudjmentCards(100, player, 100);
      paymentYouMustPayOrSurrender = 100;

      console.log(`${player} money - 100`);
      break;
    case 10:
      checkIfPlayerCanTpayLuckANDjudjmentCards(100, player, 100);
      paymentYouMustPayOrSurrender = 100;

      console.log(`${player} money - 100`);
      break;
    case 11:
      checkIfPlayerCanTpayLuckANDjudjmentCards(150, player, 150);
      paymentYouMustPayOrSurrender = 150;

      console.log(`${player} money - 150`);
      break;
    case 12:
      players[player].geTouToFJailCard = true;
      console.log(`${player} received Get Out of Jail card`);
      break;
    case 13:
      checkIfPlayerCanTpayLuckANDjudjmentCards(100, player, 100);
      paymentYouMustPayOrSurrender = 100;

      console.log(`${player} money - 100`);
      break;
    case 14:
      for (let key in players) {
        if (key == player) {
          continue;
        } else {
          checkIfPlayerCanTpayLuckANDjudjmentCards(50, player, 50);
          paymentYouMustPayOrSurrender = 50;
        }
      }
      players[player].playerMoney += 50 * playerTurn;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + ${50 * playerTurn - 1}`);
      break;
    case 15:
      checkIfPlayerCanTpayLuckANDjudjmentCards(50, player, 50);
      paymentYouMustPayOrSurrender = 50;

      console.log(`${player} money - 50`);
      break;
    case 16:
      checkIfPlayerCanTpayLuckANDjudjmentCards(150, player, 150);
      paymentYouMustPayOrSurrender = 150;

      console.log(`${player} money - 150`);
      break;
    case 17:
      checkIfPlayerCanTpayLuckANDjudjmentCards(250, player, 250);
      paymentYouMustPayOrSurrender = 250;

      console.log(`${player} money - 250`);
      break;

    default:
      console.log("Invalid card");
  }
}

// محكمة
let judjmentCards = {
  1: { text: "تم القبض عليك لقطع إشارة المرور، ادفع 30 جنيهًا" },
  2: { text: "أوقفت سيارتك في مكان غير مسموح به، ادفع 20 جنيهًا مخالفة" },
  3: { text: "حصلت على تعويض بسبب حادث، استلم 100 جنيه" },
  4: { text: "دفعت مخالفة لعدم ارتداء الحزام، ادفع 25 جنيهًا" },
  5: { text: "بحت قضية ضد شركة تأمين، استلم 150 جنيهًا" },
  6: { text: "أصدرت شيك بدون رصيد، ادفع 60 جنيهًا غرامة" },
  7: { text: "تم الحكم عليك بغرامة تجاوز السرعة، ادفع 45 جنيهًا." },
  8: { text: " أدفع 200 جنيه كغرامة بسبب التهرب الضريبي" },
  9: { text: "هارب من العسكرية اذهب الى السجن حالا" },
  10: { text: "القيت زبالة في الشارع ادفع 50 جنية غرامة" },
  11: { text: "ربحت قضيتك ضد زملائك خذ 25 من كل لاعب" },
  12: { text: "استرد 150 جنيهًا من المحكمة كتعويض" },
  13: { text: "تجنب السجن، لكن ادفع 100 جنيه" },
  14: { text: "اتهمت غدرا وظهرت برائتك خد 200 جنية تعويض" },
  15: { text: "خسرت قضيتك ادفع 15 جنية اتعاب محاماه" },
  16: { text: "خصم 50 جنية بدون سبب" },
  17: { text: "ادفع 100 جنيه غرامة تجاوز السرعة" },
};

function swichCasejudjmentCards(randomNumber, player) {
  switch (randomNumber) {
    case 1:
      checkIfPlayerCanTpayLuckANDjudjmentCards(30, player, 30);
      paymentYouMustPayOrSurrender = 30;

      console.log(`${player} money - 30`);
      break;
    case 2:
      checkIfPlayerCanTpayLuckANDjudjmentCards(20, player, 20);
      paymentYouMustPayOrSurrender = 20;

      console.log(`${player} money - 20`);
      break;
    case 3:
      players[player].playerMoney += 100;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + 100`);
      break;
    case 4:
      checkIfPlayerCanTpayLuckANDjudjmentCards(25, player, 25);
      paymentYouMustPayOrSurrender = 25;

      console.log(`${player} money - 25`);
      break;
    case 5:
      players[player].playerMoney += 150;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + 150`);
      break;
    case 6:
      checkIfPlayerCanTpayLuckANDjudjmentCards(60, player, 60);
      paymentYouMustPayOrSurrender = 60;

      console.log(`${player} money - 60`);
      break;
    case 7:
      checkIfPlayerCanTpayLuckANDjudjmentCards(45, player, 45);
      paymentYouMustPayOrSurrender = 45;

      console.log(`${player} money - 45`);
      break;
    case 8:
      checkIfPlayerCanTpayLuckANDjudjmentCards(200, player, 200);
      paymentYouMustPayOrSurrender = 200;

      console.log(`${player} money - 200`);
      break;
    case 9:
      moveToCell(25, player);
      players[player].playeRlocation = 25;
      console.log(`${player} goes to jail`);
      break;
    case 10:
      checkIfPlayerCanTpayLuckANDjudjmentCards(50, player, 50);
      paymentYouMustPayOrSurrender = 50;

      console.log(`${player} money - 50`);
      break;
    case 11:
      for (let key in players) {
        if (key == player) {
          continue;
        } else {
          checkIfPlayerCanTpayLuckANDjudjmentCards(25, key, 25);
          paymentYouMustPayOrSurrender = 25;
        }
      }
      players[player].playerMoney += 25 * playerTurn;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + ${25 * playerTurn - 1}`);
      break;
    case 12:
      players[player].playerMoney += 150;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + 150`);
      break;
    case 13:
      checkIfPlayerCanTpayLuckANDjudjmentCards(100, player, 100);
      paymentYouMustPayOrSurrender = 100;

      console.log(`${player} money - 100`);
      break;
    case 14:
      players[player].playerMoney += 200;
      changePlayerMoneyInSwap(player);

      updateAccordion(player);
      console.log(`${player} money + 200`);
      break;
    case 15:
      checkIfPlayerCanTpayLuckANDjudjmentCards(15, player, 15);
      paymentYouMustPayOrSurrender = 15;

      console.log(`${player} money - 15`);
      break;
    case 16:
      checkIfPlayerCanTpayLuckANDjudjmentCards(50, player, 50);
      paymentYouMustPayOrSurrender = 50;

      console.log(`${player} money - 50`);
      break;
    case 17:
      checkIfPlayerCanTpayLuckANDjudjmentCards(100, player, 100);
      paymentYouMustPayOrSurrender = 100;

      console.log(`${player} money - 100`);
      break;

    default:
      console.log("Invalid card");
  }
}

// check if player cant pay luck&judjment cards
function checkIfPlayerCanTpayLuckANDjudjmentCards(
  rent,
  player,
  paymentYouMustPayOrSurrender
) {
  if (players[player].playerMoney < rent) {
    if (players[player].playerCitys.length == 0) {
      console.log(`${player} is out of the game`);

      screenBoardDecisions.textContent = `${player} can't pay rent , ${player} is eleminted`;
      setTimeout(() => {
        let playeRturn = players[player].playeRturn;
        accordion.querySelectorAll("article")[playeRturn - 1].remove();
        delete players[player];

        for (const key in players) {
          delete players[key].playeRturn;
        }
        playerTurn = 0;
        for (const key in players) {
          players[key].playeRturn = ++playerTurn;
        }
        if (currentPlayerTurn > 1) {
          --currentPlayerTurn;
        }
        document.querySelector(`div.player[title="${player}"]`).remove();
        removeAllPlayerCityWhenDied(player);
      }, 2500);

      // winning condtion
      setTimeout(() => {
        let winningScreen = document.querySelector(".winning");
        let winningCrown = document.querySelector("#winningCrown");
        if (Object.keys(players).length == 1) {
          winningScreen.textContent = `${
            Object.keys(players)[0]
          } is the Winner !!!`;
          winningScreen.style.display = "flex";
          winningCrown.style.display = "block";
        }
      }, 2500);
    } else if (players[player].playerCitys.length > 0) {
      screenBoardDecisions.textContent = `you dont have enough money to pay : ${paymentYouMustPayOrSurrender}, but you can sell your citys to the bank or to the players`;
      displayAndHiddenpayANDsurrenderBtns(player);
    }
  } else {
    players[player].playerMoney -= rent;
    changePlayerMoneyInSwap(player);

    updateAccordion(player);
  }
}

// random number genrator
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandomNumberFrom1To17() {
  return Math.floor(Math.random() * 17) + 1;
}
// find which player turn is
function findPlayerWithTurn(turn) {
  for (const player in players) {
    if (players[player].playeRturn === turn) {
      return player;
    }
  }
}

function removeAllPlayerCityWhenDied(player) {
  let playerCitys = players[player].playerCitys;
  playerCitys.forEach((city) => {
    for (const key in allCells) {
      if (allCells[key].cityName == city) {
        allCells[key].ownership = null;
        allCells[key].buyState = false;
        resetArrowColors("transparent", key);
      }
    }
  });
}

// give players money based on garage,rest or market and check if player cant pay rent
function giveGarageOrRestOrMarketRentAndCheckIfPlayerCantPayRent(
  type,
  player,
  playerCity,
  currentPlayerLocation
) {
  if (players[player].playerMoney < allCells[currentPlayerLocation][type]) {
    if (players[player].playerCitys.length == 0) {
      console.log(`${player} is out of the game`);

      screenBoardDecisions.textContent = `${player} can't pay rent , ${player} is eleminted`;
      setTimeout(() => {
        let playeRturn = players[player].playeRturn;
        accordion.querySelectorAll("article")[playeRturn - 1].remove();
        delete players[player];

        for (const key in players) {
          delete players[key].playeRturn;
        }
        playerTurn = 0;
        for (const key in players) {
          players[key].playeRturn = ++playerTurn;
        }
        if (currentPlayerTurn > 1) {
          --currentPlayerTurn;
        }
        document.querySelector(`div.player[title="${player}"]`).remove();
        removeAllPlayerCityWhenDied(player);
      }, 2500);

      // winning condtion
      setTimeout(() => {
        let winningScreen = document.querySelector(".winning");
        let winningCrown = document.querySelector("#winningCrown");

        if (Object.keys(players).length == 1) {
          winningScreen.textContent = `${
            Object.keys(players)[0]
          } is the Winner !!!`;
          winningScreen.style.display = "flex";
          winningCrown.style.display = "block";
        }
      }, 2500);
    } else if (players[player].playerCitys.length > 0) {
      screenBoardDecisions.textContent = `you dont have enough money to pay : ${allCells[currentPlayerLocation][type]}, but you can sell your citys to the bank or to the players`;
      displayAndHiddenpayANDsurrenderBtns(player);
    }
  } else {
    players[player].playerMoney -= allCells[currentPlayerLocation][type];
    if (playerCity !== null) {
      players[playerCity].playerMoney += allCells[currentPlayerLocation][type];
      screenBoardDecisions.textContent = `${player} give ${playerCity} ${type} = ${allCells[currentPlayerLocation][type]}`;
      console.log(
        `${player} give ${playerCity} ${type} = ${allCells[currentPlayerLocation][type]}`
      );
      updateAccordion(playerCity);
    } else {
      screenBoardDecisions.textContent = `${player} give club ${type} = ${allCells[currentPlayerLocation][type]}`;
      console.log(
        `${player} give ${playerCity} club = ${allCells[currentPlayerLocation][type]}`
      );
    }

    changePlayerMoneyInSwap(player);

    updateAccordion(player);
  }
}

// sell variables decleartion
let sellBtn = document.querySelector("#sellBtn");
let sellPage = document.querySelector(".sellPage");
let sellPageClose = document.querySelector(".sellPageClose");
let sellPlayer = document.querySelector(".sellPlayer");
let sellText = document.querySelector(".sellText");

sellBtn.addEventListener("click", function () {
  sellPage.style.display = "flex";
  diceLock = true;
  console.log("sellPage clicked");
});

sellPageClose.addEventListener("click", function () {
  sellPage.style.display = "none";
  diceLock = false;
  console.log("sellPageClose clicked");
});

// sell to the bank function
function sellToTheBank(player) {
  let keyCityName = null;
  let moneyYouGetWhenSellCitysScreen = document.querySelector(
    ".moneyYouGetWhenSellCitysScreen"
  );
  let moneyYouGetWhenSellCitys = 0;
  sellPlayer.textContent = player;
  if (players[player].playerCitys.length > 0) {
    let sellPlayerCitys = document.querySelector(".sellPlayerCitys");

    let playerCitys = players[player].playerCitys;
    console.log(`this is ${players[player].playerCitys} `);
    sellPlayerCitys.innerHTML = "";

    playerCitys.forEach((city) => {
      let span = document.createElement("span");
      span.style.cursor = "pointer";
      span.addEventListener("click", function () {
        if (span.classList.contains("chooseingSellPlayerCitysUnderline")) {
          span.classList.remove("chooseingSellPlayerCitysUnderline");

          for (let key in allCells) {
            if (allCells[key].cityName == city) {
              keyCityName = key;
            }
          }
          if (allCells[keyCityName].haveMarket == true) {
            moneyYouGetWhenSellCitys -=
              allCells[keyCityName].marketPrice -
              (allCells[keyCityName].marketPrice * 30) / 100;
            moneyYouGetWhenSellCitys -=
              allCells[keyCityName].cityPrice -
              (allCells[keyCityName].cityPrice * 30) / 100;
          } else if (allCells[keyCityName].haveRest == true) {
            moneyYouGetWhenSellCitys -=
              allCells[keyCityName].restPrice -
              (allCells[keyCityName].restPrice * 30) / 100;
            moneyYouGetWhenSellCitys -=
              allCells[keyCityName].cityPrice -
              (allCells[keyCityName].cityPrice * 30) / 100;
          } else if (allCells[keyCityName].haveGarage == true) {
            moneyYouGetWhenSellCitys -=
              allCells[keyCityName].garagePrice -
              (allCells[keyCityName].garagePrice * 30) / 100;
            moneyYouGetWhenSellCitys -=
              allCells[keyCityName].cityPrice -
              (allCells[keyCityName].cityPrice * 30) / 100;
          } else {
            moneyYouGetWhenSellCitys -=
              allCells[keyCityName].cityPrice -
              (allCells[keyCityName].cityPrice * 30) / 100;
          }
          moneyYouGetWhenSellCitysScreen.textContent = `Money you will get after sell : ${moneyYouGetWhenSellCitys}`;

          console.log(
            `  -= allCells[keyCityName].cityPrice :${allCells[keyCityName].cityPrice} , moneyYouGetWhenSellCitys : ${moneyYouGetWhenSellCitys}`
          );
        } else {
          span.classList.add("chooseingSellPlayerCitysUnderline");

          for (let key in allCells) {
            if (allCells[key].cityName == city) {
              keyCityName = key;
            }
          }
          if (allCells[keyCityName].haveMarket == true) {
            moneyYouGetWhenSellCitys +=
              allCells[keyCityName].marketPrice -
              (allCells[keyCityName].marketPrice * 30) / 100;
            moneyYouGetWhenSellCitys +=
              allCells[keyCityName].cityPrice -
              (allCells[keyCityName].cityPrice * 30) / 100;
          } else if (allCells[keyCityName].haveRest == true) {
            moneyYouGetWhenSellCitys +=
              allCells[keyCityName].restPrice -
              (allCells[keyCityName].restPrice * 30) / 100;
            moneyYouGetWhenSellCitys +=
              allCells[keyCityName].cityPrice -
              (allCells[keyCityName].cityPrice * 30) / 100;
          } else if (allCells[keyCityName].haveGarage == true) {
            moneyYouGetWhenSellCitys +=
              allCells[keyCityName].garagePrice -
              (allCells[keyCityName].garagePrice * 30) / 100;
            moneyYouGetWhenSellCitys +=
              allCells[keyCityName].cityPrice -
              (allCells[keyCityName].cityPrice * 30) / 100;
          } else {
            moneyYouGetWhenSellCitys +=
              allCells[keyCityName].cityPrice -
              (allCells[keyCityName].cityPrice * 30) / 100;
          }
          moneyYouGetWhenSellCitysScreen.textContent = `Money you will get after sell : ${moneyYouGetWhenSellCitys}`;

          console.log(
            `  += allCells[keyCityName].cityPrice :${allCells[keyCityName].cityPrice} , moneyYouGetWhenSellCitys : ${moneyYouGetWhenSellCitys}`
          );
        }
      });
      span.textContent = `${city}`;
      sellPlayerCitys.appendChild(span);
      console.log(`this is ${span}`);
    });
    sellText.textContent = `select the citys you want to sell with a loss of 30%`;
    moneyYouGetWhenSellCitysScreen.textContent = `Money you will get after sell : ${moneyYouGetWhenSellCitys}`;

    let submitBtnsSell = document.getElementById(`submitBtnsSell${player}`);
    // Remove any existing event listeners to avoid multiple triggers
    submitBtnsSell.replaceWith(submitBtnsSell.cloneNode(true)); // Clone the button to remove any event listeners
    submitBtnsSell = document.getElementById(`submitBtnsSell${player}`); // Get the new cloned button
    submitBtnsSell.style.display = "block";
    submitBtnsSell.addEventListener("click", function () {
      let sellPlayerCitys = document.querySelectorAll(
        ".chooseingSellPlayerCitysUnderline"
      );
      let playerCitys = players[player].playerCitys;
      sellPlayerCitys.forEach((city) => {
        for (let key in allCells) {
          if (allCells[key].cityName == city.textContent) {
            allCells[key].ownership = null;
            allCells[key].buyState = false;
            resetArrowColors("transparent", key);
          }
        }
        for (let i = 0; i < playerCitys.length; i++) {
          if (playerCitys[i] == city.textContent) {
            playerCitys.splice(i, 1);
          }
        }
      });
      players[player].playerMoney += moneyYouGetWhenSellCitys;
      updateAccordion(player);
      diceLock = false;
      sellPage.style.display = "none";
      submitBtnsSell.style.display = "none";
    });
  } else {
    sellText.textContent = `you dont have any citys to sell`;
  }
}

// reset sell to the bank function
function resetSellToTheBank(player) {
  let moneyYouGetWhenSellCitysScreen = document.querySelector(
    ".moneyYouGetWhenSellCitysScreen"
  );
  moneyYouGetWhenSellCitysScreen.textContent = "";
  let sellPlayerCitys = document.querySelector(".sellPlayerCitys");
  sellPlayerCitys.textContent = "";
  let submitBtnsSell = document.getElementById(`submitBtnsSell`);

  let children = submitBtnsSell.children;

  for (let i = 0; i < children.length; i++) {
    children[i].style.display = "none";
  }
}
// upgrade variables decleartion
let UpgradeBtn = document.getElementById("UpgradeBtn");
let upgradePage = document.querySelector(".upgradePage");
let upgradePageClose = document.querySelector(".upgradePageClose");
let upgradePlayer = document.querySelector(".upgradePlayer");
let upgradeText = document.querySelector(".upgradeText");

UpgradeBtn.addEventListener("click", function () {
  upgradePage.style.display = "flex";
  diceLock = true;
  console.log("UpgradeBtn clicked");
});
upgradePageClose.addEventListener("click", function () {
  upgradePage.style.display = "none";
  diceLock = false;
  console.log("UpgradePageClose clicked");
});
// upgrade
function resetSubmitBtnsUpgrade() {
  let submitBtnsUpgrade = document.querySelector("#submitBtnsUpgrade");
  let children = submitBtnsUpgrade.children;

  for (let i = 0; i < children.length; i++) {
    children[i].style.display = "none";
  }
}
function upgrade(currentPlayerLocation, player) {
  let validUpgrade = true;
  console.log(
    `currentPlayerLocationInUpgrade : ${allCells[currentPlayerLocation].cityName}`
  );
  upgradePlayer.textContent = player;

  let reigon = allCells[currentPlayerLocation].reigon;
  let currentCity = allCells[currentPlayerLocation];
  console.log(`Current reigon = ${reigon}`);
  Object.values(allCells).forEach((city) => {
    if (city.reigon == reigon && city.ownership != player) {
      console.log(`city in forEach is :${JSON.stringify(city.cityName)}`);

      validUpgrade = false;
    }
  });
  if (validUpgrade) {
    if (
      currentCity.haveGarage == false &&
      currentCity.haveRest == false &&
      currentCity.haveMarket == false
    ) {
      upgradeText.textContent = `do you want to upgrade ${currentCity.cityName} to Garage For ${currentCity.garagePrice}`;
      console.log(
        `${player} want to upgrade ${currentCity.cityName} to Garage`
      );
    } else if (
      currentCity.haveRest == false &&
      currentCity.haveGarage == true
    ) {
      upgradeText.textContent = `do you want to upgrade ${currentCity.cityName} to Rest For ${currentCity.restPrice}`;
      console.log(`${player} want to upgrade ${currentCity.cityName} to Rest`);
    } else if (
      currentCity.haveMarket == false &&
      currentCity.haveRest == true &&
      currentCity.haveGarage == true
    ) {
      upgradeText.textContent = `do you want to upgrade ${currentCity.cityName} to Market For ${currentCity.marketPrice}`;
      console.log(
        `${player} want to upgrade ${currentCity.cityName} to Market`
      );
    } else if (
      currentCity.haveMarket == true &&
      currentCity.haveRest == true &&
      currentCity.haveGarage == true
    ) {
      upgradeText.textContent = `${currentCity.cityName} City is fully upgrade`;
    }

    let submitBtnsUpgrade = document.getElementById(
      `submitBtnsUpgrade${player}`
    );
    // Remove any existing event listeners to avoid multiple triggers
    submitBtnsUpgrade.replaceWith(submitBtnsUpgrade.cloneNode(true)); // Clone the button to remove any event listeners
    submitBtnsUpgrade = document.getElementById(`submitBtnsUpgrade${player}`); // Get the new cloned button

    submitBtnsUpgrade.style.display = "block";
    submitBtnsUpgrade.addEventListener("click", function () {
      let playerDiv = document.getElementById("player");
      if (
        currentCity.haveGarage == false &&
        currentCity.haveRest == false &&
        currentCity.haveMarket == false
      ) {
        currentCity.haveGarage = true;
        players[player].playerMoney -= currentCity.garagePrice;
        updateAccordion(player);
        submitBtnsUpgrade.style.display = "none";

        let garage = document.createElement("div");
        garage.title = "garage";
        garage.id = `${currentCity.cityName}Garage`;
        garage.style.bottom = `${allCells[currentPlayerLocation].bottom}px`;
        garage.style.left = `${allCells[currentPlayerLocation].left}px`;
        garage.style.zIndex = "100";
        garage.classList.add("garage");

        playerDiv.insertAdjacentElement("afterend", garage);
      } else if (
        currentCity.haveGarage == true &&
        currentCity.haveRest == false &&
        currentCity.haveMarket == false
      ) {
        currentCity.haveRest = true;

        players[player].playerMoney -= currentCity.restPrice;
        updateAccordion(player);
        submitBtnsUpgrade.style.display = "none";
        let rest = document.createElement("div");
        rest.title = "rest";
        rest.id = `${currentCity.cityName}Rest`;

        rest.style.bottom = `${allCells[currentPlayerLocation].bottom}px`;
        rest.style.left = `${allCells[currentPlayerLocation].left}px`;
        rest.style.zIndex = "200";

        rest.classList.add("rest");
        playerDiv.insertAdjacentElement("afterend", rest);
      } else if (
        currentCity.haveGarage == true &&
        currentCity.haveRest == true &&
        currentCity.haveMarket == false
      ) {
        currentCity.haveMarket = true;

        players[player].playerMoney -= currentCity.marketPrice;
        updateAccordion(player);
        submitBtnsUpgrade.style.display = "none";
        let market = document.createElement("div");
        market.title = "market";
        market.id = `${currentCity.cityName}Market`;

        market.style.bottom = `${allCells[currentPlayerLocation].bottom}px`;
        market.style.left = `${allCells[currentPlayerLocation].left}px`;
        market.style.zIndex = "300";

        market.classList.add("market");
        playerDiv.insertAdjacentElement("afterend", market);
      }
      upgradePage.style.display = "none";
      diceLock = false;
    });
  } else {
    upgradeText.textContent = `you dont buy all region countrys`;
    console.log(`you dont buy all region countrys`);
  }
}

function displayAndHiddenBtns(player, playeRlocation) {
  document.querySelectorAll("button").forEach((button) => {
    document.getElementById(`yesBtn${player}`).style.display = "block";
    document.getElementById(`noBtn${player}`).style.display = "block";
    console.log(`${player} btns`);
  });
}
function displayAndHiddenpayANDsurrenderBtns(player, playeRlocation) {
  document.querySelectorAll("button").forEach((button) => {
    document.getElementById(`payBtn${player}`).style.display = "block";
    document.getElementById(`surrenderBtn${player}`).style.display = "block";
    console.log(`${player} pay&surrender btns`);
  });
}

function changePlayerMoneyInSwap(player) {
  swapPlayer.textContent = player;
  swapPlayerSliderInput.min = 0;
  swapPlayerSliderInput.max = players[player].playerMoney - 1;
  let swapPlayerCitys = document.querySelector(".swapPlayerCitys");

  let playerCitys = players[player].playerCitys;
  console.log(`this is ${players[player].playerCitys} `);
  swapPlayerCitys.innerHTML = "";

  playerCitys.forEach((city) => {
    let span = document.createElement("span");
    span.style.cursor = "pointer";
    span.addEventListener("click", function () {
      if (span.classList.contains("chooseingSwapPlayerCitysUnderline")) {
        span.classList.remove("chooseingSwapPlayerCitysUnderline");
      } else {
        span.classList.add("chooseingSwapPlayerCitysUnderline");
      }
    });
    span.textContent = `${city}`;
    swapPlayerCitys.appendChild(span);
    console.log(`this is ${span}`);
  });
}

// when click dice and what happen when you go to somecell
let screenBoardTurn = document.getElementById("screenBoardTurn");
let screenBoardDecisions = document.getElementById("screenBoardDecisions");
let screenYouMustChooseFirst = document.getElementById(
  "screenYouMustChooseFirst"
);

// let jailRound = 0;
// let jailRoundScreen = 2;
let diceLock = false;
let currentPlayerTurn = 1;
let nextPlayerTurn = 2;
document.getElementById("dice").addEventListener("click", function () {
  if (diceLock == false) {
    let randomNumber = getRandomNumber();
    document.getElementById(
      "displayDiceNumber"
    ).textContent = `The Dice = ${randomNumber}`;
    // setTimeout(() => {

    let player = findPlayerWithTurn(currentPlayerTurn);
    console.log(`player in findPlayerWithTurn = ${player} `);
    changePlayerMoneyInSwap(player);
    restSwapSubmitBtn();
    let submitBtn = document.getElementById(`submitBtn${player}`);
    console.log(
      `document.getElementById('submitBtn${player}'); = ${submitBtn.id} `
    );

    // Remove any existing event listeners to avoid multiple triggers
    submitBtn.replaceWith(submitBtn.cloneNode(true)); // Clone the button to remove any event listeners
    submitBtn = document.getElementById(`submitBtn${player}`); // Get the new cloned button
    console.log(
      `document.getElementById('submitBtn${player}'); = ${submitBtn.id} `
    );

    submitBtn.style.display = "block";
    submitBtn.addEventListener("click", function () {
      let playerMoneyWantToSwap = swapPlayerSliderInput.value;
      let otheRplayerMoneyWantToSwap = otherSwapPlayersSliderInput.value;
      let otheRpalyer = document.querySelector(
        "span.chooseingSwapPlayerUnderline"
      ).textContent;
      console.log(`submit click by ${player}`);
      console.log(`${player} swap money = ${playerMoneyWantToSwap}`);
      console.log(`${otheRpalyer} swap money = ${otheRplayerMoneyWantToSwap}`);
      players[player].playerMoney += parseInt(otheRplayerMoneyWantToSwap);
      players[player].playerMoney -= parseInt(playerMoneyWantToSwap);
      players[otheRpalyer].playerMoney += parseInt(playerMoneyWantToSwap);
      players[otheRpalyer].playerMoney -= parseInt(otheRplayerMoneyWantToSwap);
      let swapOtherPlayerCitys = document.querySelectorAll(
        ".chooseingotheRSwapPlayerCitysUnderline"
      );
      let SwapPlayerCitys = document.querySelectorAll(
        ".chooseingSwapPlayerCitysUnderline"
      );
      swapOtherPlayerCitys.forEach((span) => {
        console.log(span.textContent);
        for (let key in allCells) {
          if (allCells[key].cityName == span.textContent) {
            allCells[key].ownership = player;
            players[player].playerCitys.push(allCells[key].cityName);
            console.log(`${players[player].playerCitys} in the loop`);
            players[otheRpalyer].playerCitys = players[
              otheRpalyer
            ].playerCitys.filter((city) => city !== allCells[key].cityName);
            changeArrowColors(player, key);
          }
        }
      });
      SwapPlayerCitys.forEach((span) => {
        console.log(span.textContent);
        for (let key in allCells) {
          if (allCells[key].cityName == span.textContent) {
            allCells[key].ownership = otheRpalyer;
            players[otheRpalyer].playerCitys.push(allCells[key].cityName);
            console.log(`${players[player].playerCitys} in the loop`);

            players[player].playerCitys = players[player].playerCitys.filter(
              (city) => city !== allCells[key].cityName
            );

            changeArrowColors(otheRpalyer, key);
          }
        }
      });
      updateAccordion(player);
      updateAccordion(otheRpalyer);

      swapPage.style.display = "none";
      submitBtn.style.display = "none";
      if (
        document.getElementById(`yesBtn${player}`).style.display == "none" &&
        document.getElementById(`noBtn${player}`).style.display == "none"
      ) {
        diceLock = false;
      }
    });

    console.log(`player = ${player}`);
    screenBoardTurn.textContent = `Next Turn ${findPlayerWithTurn(
      nextPlayerTurn
    )} `;

    ++currentPlayerTurn;
    ++nextPlayerTurn;
    if (currentPlayerTurn > playerTurn) {
      currentPlayerTurn = 1;
    }
    if (nextPlayerTurn > playerTurn) {
      nextPlayerTurn = 1;
    }

    // bus
    if (players[player].playeRlocation == 18) {
      moveToCell(players[player].playeRlocation + randomNumber * 2, player);
    }
    //jail
    else if (players[player].playeRlocation == 25) {
      if (players[player].geTouToFJailCard == true) {
        players[player].geTouToFJailCard == false;
        moveToCell(players[player].playeRlocation + randomNumber, player);

        screenBoardDecisions.textContent = `${player} استخدم بطاقة الخروج من السجن `;
      } else if (players[player].geTouToFJailCard == false) {
        screenBoardDecisions.textContent = `${player} you went to jail, you will not play for ${players[player].jailRoundScreen} rounds `;
        players[player].jailRound += 1;
        players[player].jailRoundScreen -= 1;
        if (players[player].jailRound > 2) {
          players[player].jailRound = 0;
          players[player].jailRoundScreen = 2;
          screenBoardDecisions.textContent = `${player} out of the jail `;

          moveToCell(players[player].playeRlocation + randomNumber, player);
        }
      }
    } else {
      moveToCell(players[player].playeRlocation + randomNumber, player);
    }
    let currentPlayerLocation = players[player].playeRlocation;

    if (allCells[currentPlayerLocation].type == "jail") {
    } else if (
      allCells[currentPlayerLocation].type == "gasStation" &&
      allCells[currentPlayerLocation].ownership == null
    ) {
      screenBoardDecisions.textContent = `${player} do you want to buy the Gas station for 300 
        and get rent 40 ?`;
      displayAndHiddenBtns(player);
      diceLock = true;
    } else if (
      allCells[currentPlayerLocation].type == "gasStation" &&
      allCells[currentPlayerLocation].ownership !== null
    ) {
      screenBoardDecisions.textContent = `${player} give ${allCells[currentPlayerLocation].ownership} rent = 40 for Gas Station`;

      giveGarageOrRestOrMarketRentAndCheckIfPlayerCantPayRent(
        "rent",
        player,
        allCells[currentPlayerLocation].ownership,
        currentPlayerLocation
      );
      // let ownerOfGasStation = allCells[currentPlayerLocation].ownership;
      // players[player].playerMoney -= 40;
      // players[ownerOfGasStation].playerMoney += 40;
      console.log(
        `${player} give ${allCells[currentPlayerLocation].ownership} rent = 40 40 for Gas Station`
      );
      // changePlayerMoneyInSwap(player);

      // updateAccordion(player);
      // updateAccordion(ownerOfGasStation);
    } else if (
      allCells[currentPlayerLocation].type == "club" &&
      players[player].IsClubMember == true
    ) {
      screenBoardDecisions.textContent = `${player} are Club Member`;
    } else if (
      // club
      allCells[currentPlayerLocation].type == "club" &&
      allCells[currentPlayerLocation].isFull == false
    ) {
      screenBoardDecisions.textContent = `${player} do you want to join the club with 150 or continue pay 20 rent ?`;
      displayAndHiddenBtns(player);
      diceLock = true;
      console.log(` ${player} in club`);
    } else if (
      allCells[currentPlayerLocation].type == "club" &&
      allCells[currentPlayerLocation].isFull == true &&
      players[player].IsClubMember == false
    ) {
      giveGarageOrRestOrMarketRentAndCheckIfPlayerCantPayRent(
        "rent",
        player,
        null,
        currentPlayerLocation
      );
      // players[player].playerMoney -= 20;
      // screenBoardDecisions.textContent = `${player} give the club 20 rent`;
      // console.log(`${player} give the club 20 rent`);
      // changePlayerMoneyInSwap(player);

      // updateAccordion(player);

      console.log(` ${player} in club`);
    } else if (
      allCells[currentPlayerLocation].type == "city" &&
      allCells[currentPlayerLocation].buyState == false
    ) {
      console.log(
        `${player} is in ${allCells[currentPlayerLocation].cityName}    `
      );
      screenBoardDecisions.textContent = `${player} do you want to buy ${allCells[currentPlayerLocation].cityName}`;
      console.log(
        `${player} do you want to buy ${allCells[currentPlayerLocation].cityName}`
      );
      displayAndHiddenBtns(player);
      diceLock = true;
    } else if (
      allCells[currentPlayerLocation].type == "city" &&
      allCells[currentPlayerLocation].buyState == true &&
      allCells[currentPlayerLocation].ownership !== player
    ) {
      let playerCity = [allCells[currentPlayerLocation].ownership];

      if (
        allCells[currentPlayerLocation].haveGarage == true &&
        allCells[currentPlayerLocation].haveRest == false &&
        allCells[currentPlayerLocation].haveMarket == false
      ) {
        giveGarageOrRestOrMarketRentAndCheckIfPlayerCantPayRent(
          "garageRent",
          player,
          playerCity,
          currentPlayerLocation
        );
      } else if (
        allCells[currentPlayerLocation].haveGarage == true &&
        allCells[currentPlayerLocation].haveRest == true &&
        allCells[currentPlayerLocation].haveMarket == false
      ) {
        giveGarageOrRestOrMarketRentAndCheckIfPlayerCantPayRent(
          "restRent",
          player,
          playerCity
        ),
          currentPlayerLocation;
      } else if (
        allCells[currentPlayerLocation].haveGarage == true &&
        allCells[currentPlayerLocation].haveRest == true &&
        allCells[currentPlayerLocation].haveMarket == true
      ) {
        giveGarageOrRestOrMarketRentAndCheckIfPlayerCantPayRent(
          "marketRent",
          player,
          playerCity,
          currentPlayerLocation
        );
      } else {
        giveGarageOrRestOrMarketRentAndCheckIfPlayerCantPayRent(
          "rent",
          player,
          playerCity,
          currentPlayerLocation
        );
      }
    } // حظك
    else if (
      players[player].playeRlocation == 13 ||
      players[player].playeRlocation == 30
    ) {
      console.log(`${player} in luck cell`);
      let randomNumber = getRandomNumberFrom1To17();
      screenBoardDecisions.textContent = luckCards[randomNumber].text;
      setTimeout(() => {
        swichCaseluckCards(randomNumber, player);
      }, 2500);
      changePlayerMoneyInSwap(player);
      updateAccordion(player);
    } else if (
      players[player].playeRlocation == 11 ||
      players[player].playeRlocation == 21 ||
      players[player].playeRlocation == 32
    ) {
      // محكمة
      console.log(`${player} in judjment cell`);
      let randomNumber = getRandomNumberFrom1To17();
      screenBoardDecisions.textContent = judjmentCards[randomNumber].text;
      setTimeout(() => {
        swichCasejudjmentCards(randomNumber, player);
      }, 2500);
      changePlayerMoneyInSwap(player);

      updateAccordion(player);

      // كرت محكمة و كرت حظك
    } else if (players[player].playeRlocation == 4) {
      console.log(`${player} in luck and judjment cell`);
      let luckRandomNumber = getRandomNumberFrom1To17();
      let judjmentRandomNumber = getRandomNumberFrom1To17();
      screenBoardDecisions.textContent = `${luckCards[luckRandomNumber].text} ||`;
      screenBoardDecisions.textContent +=
        judjmentCards[judjmentRandomNumber].text;
      setTimeout(() => {
        swichCaseluckCards(luckRandomNumber, player);
        swichCasejudjmentCards(judjmentRandomNumber, player);
      }, 2500);

      changePlayerMoneyInSwap(player);

      updateAccordion(player);
    } else {
      screenBoardDecisions.textContent = "";
      document.getElementById(`yesBtn${player}`).style.display = "none";
      document.getElementById(`noBtn${player}`).style.display = "none";
      // Hide the pay/surrender buttons after decision
      document.getElementById(`payBtn${player}`).style.display = "none";
      document.getElementById(`surrenderBtn${player}`).style.display = "none";
    }
    resetSubmitBtnsUpgrade();
    upgrade(currentPlayerLocation, player);
    console.log(`player in selltothebank is : ${player}`);
    resetSellToTheBank(player);
    sellToTheBank(player);
    let key = `${currentPlayerLocation}`;
    selectCityANDShowDetails(key);

    // }, 1000);
  } else if (diceLock == true) {
    screenYouMustChooseFirst.textContent = "you must choose first";
  }
});

// update acordion
function updateAccordion(player) {
  let playerMoney = players[player].playerMoney;
  let playerCitys = players[player].playerCitys.join(",");
  let IsClubMember = players[player].IsClubMember;
  let IsGasStationOwner = players[player].IsGasStationOwner;
  let geTouToFJailCard = players[player].geTouToFJailCard;
  document.querySelector(
    `span#${player}.accordionSpanMoney`
  ).innerHTML = `Money = ${playerMoney}`;
  document.querySelector(
    `span#${player}.accordionSpanCitys`
  ).innerHTML = `Citys = ${playerCitys}`;
  document.querySelector(
    `span#${player}.accordionSpanClub`
  ).innerHTML = `Club Member = ${IsClubMember}`;
  document.querySelector(
    `span#${player}.accordionSpanGasStation`
  ).innerHTML = `Gas station owner = ${IsGasStationOwner}`;
  document.querySelector(
    `span#${player}.accordionSpangeTouToFJailCard`
  ).innerHTML = `Jail Card = ${geTouToFJailCard}`;
}

// function that transfer you to any cell

function moveToCell(cellNumber, playerName) {
  if (cellNumber > 34) {
    // give player 200 after complete one cycle
    players[playerName].playerMoney += 200;
    updateAccordion(playerName);
    console.log(`${playerName} complete cycle and get 200 `);
    cellNumber = cellNumber % 34; // Wrap around if exceeds cell 34
    if (cellNumber === 0) cellNumber = 34; // Ensure cell number does not become 0
  }
  let elementName = document.querySelector(`div[title="${playerName}"]`);

  elementName.style.bottom = `${allCells[cellNumber].bottom}px`;
  elementName.style.left = `${allCells[cellNumber].left}px`;
  players[playerName].playeRlocation = cellNumber;
}

// declare the players for first time

let accordion = document.querySelector(".accordion");
let btns = document.querySelector(".btns");
let submitBtns = document.querySelector(".submitBtns");
let submitBtnsUpgrade = document.querySelector("#submitBtnsUpgrade");
let submitBtnsSell = document.querySelector("#submitBtnsSell");
players = JSON.parse(localStorage.getItem("players"));
let playerTurn = 0;
for (const key in players) {
  console.log(`Key: ${key}, Value:`, players[key].color);
  let newPlayer = document.createElement("div");
  players[key].playeRlocation = 1;
  players[key].playerMoney = 1200;
  players[key].playerCitys = [];
  players[key].IsClubMember = false;
  players[key].IsGasStationOwner = false;
  players[key].playeRturn = ++playerTurn;
  players[key].jailRound = 0;
  players[key].jailRoundScreen = 2;
  players[key].geTouToFJailCard = false;
  newPlayer.classList.add("player");
  newPlayer.style.backgroundColor = players[key].color;
  newPlayer.style.transition = "1s";
  newPlayer.title = key;
  newPlayer.id = key;
  accordion.innerHTML += `
   <article>
        <input id="article${players[key].playeRturn}" type="checkbox" />
        <label for="article${players[key].playeRturn}">
          <h2 style="color: ${players[key].color} ;"> ${key}</h2>
        </label>
        <div>
                  <span id="${key}" class="accordionSpanMoney" >Money = ${
    players[key].playerMoney
  } </span>
                  <span id="${key}" class="accordionSpanCitys">Citys = ${players[
    key
  ].playerCitys.join("")} </span>
      <span id="${key}" class="accordionSpanClub"> Club Member = ${
    players[key].IsClubMember
  }</span>
   <span id="${key}" class="accordionSpanGasStation"> Gas station owner = ${
    players[key].IsGasStationOwner
  }</span>
   <span id="${key}" class="accordionSpangeTouToFJailCard"> Jail Card = ${
    players[key].geTouToFJailCard
  }</span>


        </div>
      </article>
  `;
  btns.innerHTML += ` <button class="yesBtn" id="yesBtn${key}">Yes</button>
                      <button class="noBtn" id="noBtn${key}">No</button>
        `;
  submitBtns.innerHTML += ` <div id="submitBtn${key}" class="submitBtn">Submit</div> `;
  submitBtnsUpgrade.innerHTML += ` <div id="submitBtnsUpgrade${key}" class="submitBtn">Submit</div> `;
  submitBtnsSell.innerHTML += ` <div id="submitBtnsSell${key}" class="submitBtn">Submit</div> `;
  btns.innerHTML += ` <button class="paybtn" id="payBtn${key}">Pay</button>
                      <button class="surrenderBtn" id="surrenderBtn${key}">surrender</button>
        `;
  player.insertAdjacentElement("afterend", newPlayer);
}
// write the first player turn in the screen
screenBoardTurn.textContent = `Next Turn ${findPlayerWithTurn(1)}`;
// write the first player turn in the Swap screen
let swapPlayer = document.querySelector(".swapPlayer");

swapPlayer.textContent = `${findPlayerWithTurn(1)}`;

// pay btn and  surrender btn
document.querySelectorAll(".paybtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let player = this.id.replace("payBtn", ""); // Extract player name
    console.log(`the player is : ${player}`);
    let cityLocation = players[player].playeRlocation;
    let cityOwnership = allCells[cityLocation].ownership;

    switch (allCells[cityLocation].type) {
      case "city":
        if (allCells[cityLocation].haveMarket == true) {
          if (players[player].playerMoney < allCells[cityLocation].marketRent) {
            screenYouMustChooseFirst.textContent = `you still dont have enough money,you need ${
              players[player].playerMoney - allCells[cityLocation].marketRent
            } more`;
            setTimeout(() => {
              screenYouMustChooseFirst.textContent = "";
            }, 1000);
          } else {
            players[player].playerMoney -= allCells[cityLocation].marketRent;
            players[cityOwnership].playerMoney +=
              allCells[cityLocation].marketRent;
            screenBoardDecisions.textContent = `${player} give ${cityOwnership} ${allCells[cityLocation].marketRent} rent for market  `;
            HidethepaybtnANDsurrenderBtnButtonsAfterDecision(player);
          }
        } else if (allCells[cityLocation].haveRest == true) {
          if (players[player].playerMoney < allCells[cityLocation].restRent) {
            screenYouMustChooseFirst.textContent = `you still dont have enough money,you need ${
              players[player].playerMoney - allCells[cityLocation].restRent
            } more`;
            setTimeout(() => {
              screenYouMustChooseFirst.textContent = "";
            }, 1000);
          } else {
            players[player].playerMoney -= allCells[cityLocation].restRent;
            players[cityOwnership].playerMoney +=
              allCells[cityLocation].restRent;
            screenBoardDecisions.textContent = `${player} give ${cityOwnership} ${allCells[cityLocation].restRent} rent for rest  `;
            HidethepaybtnANDsurrenderBtnButtonsAfterDecision(player);
          }
        } else if (allCells[cityLocation].haveGarage == true) {
          if (players[player].playerMoney < allCells[cityLocation].garageRent) {
            screenYouMustChooseFirst.textContent = `you still dont have enough money,you need ${
              players[player].playerMoney - allCells[cityLocation].garageRent
            } more`;
            setTimeout(() => {
              screenYouMustChooseFirst.textContent = "";
            }, 1000);
          } else {
            players[player].playerMoney -= allCells[cityLocation].garageRent;
            players[cityOwnership].playerMoney +=
              allCells[cityLocation].garageRent;
            screenBoardDecisions.textContent = `${player} give ${cityOwnership} ${allCells[cityLocation].garageRent} rent for garage  `;
            HidethepaybtnANDsurrenderBtnButtonsAfterDecision(player);
          }
        } else {
          if (players[player].playerMoney < allCells[cityLocation].rent) {
            screenYouMustChooseFirst.textContent = `you still dont have enough money,you need ${
              players[player].playerMoney - allCells[cityLocation].rent
            } more`;
            setTimeout(() => {
              screenYouMustChooseFirst.textContent = "";
            }, 1000);
          } else {
            players[player].playerMoney -= allCells[cityLocation].rent;
            players[cityOwnership].playerMoney += allCells[cityLocation].rent;
            screenBoardDecisions.textContent = `${player} give ${cityOwnership} ${allCells[cityLocation].rent} rent`;
            HidethepaybtnANDsurrenderBtnButtonsAfterDecision(player);
          }
        }
        break;
      case "club":
        if (players[player].playerMoney < allCells[cityLocation].rent) {
          screenYouMustChooseFirst.textContent = `you still dont have enough money,you need ${
            players[player].playerMoney - allCells[cityLocation].rent
          } more`;
          setTimeout(() => {
            screenYouMustChooseFirst.textContent = "";
          }, 1000);
        } else {
          players[player].playerMoney -= allCells[cityLocation].rent;
          screenBoardDecisions.textContent = `${player} give club ${allCells[cityLocation].rent} rent `;
          console.log(`player in club is : ${player}`);
          HidethepaybtnANDsurrenderBtnButtonsAfterDecision(player);
        }

        break;
      case "gasStation":
        if (players[player].playerMoney < allCells[cityLocation].rent) {
          screenYouMustChooseFirst.textContent = `you still dont have enough money,you need ${
            players[player].playerMoney - allCells[cityLocation].rent
          } more`;
          setTimeout(() => {
            screenYouMustChooseFirst.textContent = "";
          }, 1000);
        } else {
          players[player].playerMoney -= allCells[cityLocation].rent;
          players[cityOwnership].playerMoney += allCells[cityLocation].rent;
          screenBoardDecisions.textContent = `${player} give ${cityOwnership} ${allCells[cityLocation].rent} rent for gas station`;
          HidethepaybtnANDsurrenderBtnButtonsAfterDecision(player);
        }

        break;
      case "luck&judjment":
        console.log(
          `paymentYouMustPayOrSurrender = ${paymentYouMustPayOrSurrender}`
        );
        if (players[player].playerMoney < paymentYouMustPayOrSurrender) {
          screenYouMustChooseFirst.textContent = `you still dont have enough money,you need ${
            players[player].playerMoney - paymentYouMustPayOrSurrender
          } more`;
          setTimeout(() => {
            screenYouMustChooseFirst.textContent = "";
          }, 1000);
        } else {
          players[player].playerMoney -= paymentYouMustPayOrSurrender;
          paymentYouMustPayOrSurrender = 0;
          HidethepaybtnANDsurrenderBtnButtonsAfterDecision(player);
        }
        break;
      default:
        break;
    }
    updateAccordion(player);
    updateAccordion(cityOwnership);
  });
});

// Hide the paybtn/surrenderBtn buttons after decision

function HidethepaybtnANDsurrenderBtnButtonsAfterDecision(player) {
  document.getElementById(`payBtn${player}`).style.display = "none";
  document.getElementById(`surrenderBtn${player}`).style.display = "none";
  diceLock = false;
  swapPlayerSliderInput.min = 1;
  swapPlayerSliderInput.max = players[player].playerMoney - 1;
  changePlayerMoneyInSwap(player);
}

// surrenderBtn
document.querySelectorAll(".surrenderBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let player = this.id.replace("surrenderBtn", ""); // Extract player name
    console.log(`the player is : ${player}`);
    console.log(`${player} is out of the game`);

    screenBoardDecisions.textContent = `${player} can't pay rent , ${player} is eleminted`;
    setTimeout(() => {
      let playeRturn = players[player].playeRturn;
      accordion.querySelectorAll("article")[playeRturn - 1].remove();
      delete players[player];

      for (const key in players) {
        delete players[key].playeRturn;
      }
      playerTurn = 0;
      for (const key in players) {
        players[key].playeRturn = ++playerTurn;
      }
      if (currentPlayerTurn > 1) {
        --currentPlayerTurn;
      }
      document.querySelector(`div.player[title="${player}"]`).remove();
    }, 2500);

    // winning condtion
    setTimeout(() => {
      let winningScreen = document.querySelector(".winning");
      let winningCrown = document.querySelector("#winningCrown");
      if (Object.keys(players).length == 1) {
        winningScreen.textContent = `${
          Object.keys(players)[0]
        } is the Winner !!!`;
        winningScreen.style.display = "flex";
        winningCrown.style.display = "block";
      }
    }, 2500);
    // Hide the paybtn/surrenderBtn buttons after decision
    document.getElementById(`payBtn${player}`).style.display = "none";
    document.getElementById(`surrenderBtn${player}`).style.display = "none";
    diceLock = false;
    swapPlayerSliderInput.min = 1;
    swapPlayerSliderInput.max = players[player].playerMoney - 1;
    changePlayerMoneyInSwap(player);

    screenYouMustChooseFirst.textContent = "";
    updateAccordion(player);
    updateAccordion(cityOwnership);
  });
});

// Handle city purchase decision
document.querySelectorAll(".yesBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let player = this.id.replace("yesBtn", ""); // Extract player name
    let cityLocation = players[player].playeRlocation;
    if (
      allCells[cityLocation].type == "city" &&
      allCells[cityLocation].buyState == false
    ) {
      // Deduct city price from player's money
      if (players[player].playerMoney > allCells[cityLocation].cityPrice) {
        players[player].playerMoney -= allCells[cityLocation].cityPrice;

        allCells[cityLocation].buyState = true;
        allCells[cityLocation].ownership = player;
        players[player].playerCitys.push(allCells[cityLocation].cityName);
        screenBoardDecisions.textContent = ` Congratulation ${player}, you bought ${allCells[cityLocation].cityName} `;
        console.log(`${player} buy  ${allCells[cityLocation].cityName}`);
        changeArrowColors(player, cityLocation);
        // Update the accordion to show player's new city and money
        updateAccordion(player);
        upgrade(cityLocation, player);
        sellToTheBank(player);
      } else {
        screenBoardDecisions.textContent = `${player} you dont have enough money to buy ${allCells[cityLocation].cityName} `;
        upgrade(cityLocation, player);
      }
    }
    if (
      allCells[cityLocation].type == "club" &&
      allCells[cityLocation].isFull == false
    ) {
      if (players[player].playerMoney > 150) {
        players[player].playerMoney -= 150;
        players[player].IsClubMember = true;
        updateAccordion(player);

        allCells[cityLocation].Subscribers += 1;

        screenBoardDecisions.textContent = `Congratulation ${player} you join the club`;
        if (allCells[cityLocation].Subscribers == 2) {
          allCells[cityLocation].isFull = true;
        }
      } else {
        screenBoardDecisions.textContent = `${player} you dont have enough money to join the club , give club 20 rent`;
        giveGarageOrRestOrMarketRentAndCheckIfPlayerCantPayRent(
          "rent",
          player,
          null,
          cityLocation
        );
      }
    }
    if (allCells[cityLocation].type == "gasStation") {
      if (players[player].playerMoney > 300) {
        allCells[cityLocation].ownership = player;
        players[player].playerMoney -= 300;
        players[player].IsGasStationOwner = true;
        screenBoardDecisions.textContent = `Congratulation ${player} you buy the Gas station`;

        updateAccordion(player);
      } else {
        screenBoardDecisions.textContent = `${player} you dont have enough money to but Gas station`;
      }
    }

    // Hide the yes/no buttons after decision
    document.getElementById(`yesBtn${player}`).style.display = "none";
    document.getElementById(`noBtn${player}`).style.display = "none";

    diceLock = false;
    swapPlayerSliderInput.min = 1;
    swapPlayerSliderInput.max = players[player].playerMoney - 1;
    changePlayerMoneyInSwap(player);

    screenYouMustChooseFirst.textContent = "";
  });
  // screenBoardDecisions.textContent = ` `;
});

document.querySelectorAll(".noBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let player = this.id.replace("noBtn", ""); // Extract player name
    let cityLocation = players[player].playeRlocation;

    console.log("No button clicked by player: " + player);
    if (allCells[cityLocation].type == "club") {
      console.log(`${player} give club 20 rent`);
      screenBoardDecisions.textContent = `${player} give the club 20 rent`;

      giveGarageOrRestOrMarketRentAndCheckIfPlayerCantPayRent(
        "rent",
        player,
        null,
        cityLocation
      );

      // players[player].playerMoney -= 20;
      // updateAccordion(player);
    }
    // setTimeout(() => {
    // screenBoardDecisions.textContent = "";
    // }, 2000);
    document.getElementById(`yesBtn${player}`).style.display = "none";
    document.getElementById(`noBtn${player}`).style.display = "none";
    diceLock = false;
    screenYouMustChooseFirst.textContent = "";
  });
});

function changeArrowColors(player, cityLocation) {
  // Mark city as bought
  let cityParentDiv1 = allCells[cityLocation].cityName;
  let cityParentDiv2 = document.getElementById(`${cityParentDiv1}`);
  // console.log(`${cityParentDiv1}`);
  // console.log(`${cityParentDiv2}`);
  let arrow = cityParentDiv2.querySelector(".arrow");
  // console.log("Arrow element:", arrow);
  if (arrow) {
    let arrowColor = players[player].color;
    // console.log("Arrow color:", arrowColor);

    if (arrow.classList.contains("arrowBottom")) {
      arrow.style.borderTop = `10px solid ${arrowColor}`;
      // console.log("Applied borderTop:", arrowColor);
    } else if (arrow.classList.contains("arrowLeft")) {
      arrow.style.borderLeft = `10px solid ${arrowColor}`;
      // console.log("Applied borderLeft:", arrowColor);
    } else if (arrow.classList.contains("arrowTop")) {
      arrow.style.borderBottom = `10px solid ${arrowColor}`;
      // console.log("Applied borderBottom:", arrowColor);
    } else if (arrow.classList.contains("arrowRight")) {
      arrow.style.borderRight = `10px solid ${arrowColor}`;
      // console.log("Applied borderRight:", arrowColor);
    } else {
      console.log("No matching class found.");
    }
  } else {
    console.log("Arrow element not found.");
  }
}
function resetArrowColors(transpert, cityLocation) {
  // Mark city as bought
  let cityParentDiv1 = allCells[cityLocation].cityName;
  let cityParentDiv2 = document.getElementById(`${cityParentDiv1}`);
  // console.log(`${cityParentDiv1}`);
  // console.log(`${cityParentDiv2}`);
  let arrow = cityParentDiv2.querySelector(".arrow");
  // console.log("Arrow element:", arrow);
  // console.log("Arrow color:", arrowColor);

  if (arrow.classList.contains("arrowBottom")) {
    arrow.style.borderTop = `10px solid ${transpert}`;
    // console.log("Applied borderTop:", arrowColor);
  } else if (arrow.classList.contains("arrowLeft")) {
    arrow.style.borderLeft = `10px solid ${transpert}`;
    // console.log("Applied borderLeft:", arrowColor);
  } else if (arrow.classList.contains("arrowTop")) {
    arrow.style.borderBottom = `10px solid ${transpert}`;
    // console.log("Applied borderBottom:", arrowColor);
  } else if (arrow.classList.contains("arrowRight")) {
    arrow.style.borderRight = `10px solid ${transpert}`;
    // console.log("Applied borderRight:", arrowColor);
  } else {
    console.log("No matching class found.");
  }
}

// مقايضة swap
let swapBtn = document.querySelector(".swapBtn");
let swapPageClose = document.querySelector(".swapPageClose");
let swapPage = document.querySelector(".swapPage");
let swapPlayerSliderInput = document.querySelector(".swapPlayerSlider input");
let swapPlayerSliderValue = document.querySelector(".swapPlayerSliderValue");
let otherSwapPlayers = document.querySelector(".otherSwapPlayers");
let otherSwapPlayersSliderInput = document.querySelector(
  ".otherSwapPlayersSlider input"
);
let otherSwapPlayersValue = document.querySelector(".otherSwapPlayersValue");
// function putPlayerInSwapScreenExpectPlayerTurn(player) {
for (let key in players) {
  let span = document.createElement("span");
  span.textContent = key;
  span.id = key;
  span.style.color = players[key].color;
  span.style.marginRight = "5px";
  span.style.cursor = "pointer";
  otherSwapPlayers.appendChild(span);
}
// }

let otherSwapPlayersSpans = document.querySelectorAll(".otherSwapPlayers span");
otherSwapPlayersSpans.forEach((span) => {
  span.addEventListener("click", function () {
    otherSwapPlayersSpans.forEach((span) =>
      span.classList.remove("chooseingSwapPlayerUnderline")
    );
    span.classList.add("chooseingSwapPlayerUnderline");
    let player = span.textContent;
    otherSwapPlayersSliderInput.value = 1;
    otherSwapPlayersValue.textContent = `Value = 1`;
    otherSwapPlayersSliderInput.min = 0;
    otherSwapPlayersSliderInput.max = players[player].playerMoney - 1;
    let playerCitys = players[player].playerCitys;
    let otherSwapPlayersCitys = document.querySelector(
      ".otherSwapPlayersCitys"
    );

    console.log(`this is ${players[player].playerCitys} `);
    otherSwapPlayersCitys.innerHTML = "";

    playerCitys.forEach((city) => {
      let span = document.createElement("span");
      span.addEventListener("click", function () {
        if (span.classList.contains("chooseingotheRSwapPlayerCitysUnderline")) {
          span.classList.remove("chooseingotheRSwapPlayerCitysUnderline");
        } else {
          span.classList.add("chooseingotheRSwapPlayerCitysUnderline");
        }
      });
      span.style.cursor = "pointer";
      span.textContent = `${city}`;
      otherSwapPlayersCitys.appendChild(span);
      console.log(`this is ${span}`);
    });
  });
});

swapBtn.addEventListener("click", function swap() {
  // document.querySelector(
  //   `.otherSwapPlayers span#${swapPlayer.textContent}`
  // ).style.display = "none";
  swapPage.style.display = "block";
  diceLock = true;
  console.log("swap");
});

swapPageClose.addEventListener("click", function () {
  // document.querySelector(
  //   `.otherSwapPlayers span#${swapPlayer.textContent}`
  // ).style.display = "block";
  diceLock = false;
  swapPage.style.display = "none";
  document.addEventListener("DOMContentLoaded", function () {
    if (
      document.getElementById(`yesBtn${player}`).style.display == "none" &&
      document.getElementById(`noBtn${player}`).style.display == "none"
    ) {
      console.log(`the dice is unlocked`);
      diceLock = false;
    }
    if (
      document.getElementById(`payBtn${player}`).style.display == "none" &&
      document.getElementById(`surrenderBtn${player}`).style.display == "none"
    ) {
      console.log(`the dice is unlocked`);
      diceLock = false;
    }
  });
});

swapPlayerSliderInput.addEventListener("change", function () {
  swapPlayerSliderValue.textContent = `Value = ${swapPlayerSliderInput.value}`;
});

otherSwapPlayersSliderInput.addEventListener("change", function () {
  otherSwapPlayersValue.textContent = `Value = ${otherSwapPlayersSliderInput.value}`;
});

let swapPlayerSliderPlus = document.querySelector(".swapPlayerSlider .plus");
swapPlayerSliderPlus.addEventListener("click", function () {
  swapPlayerSliderInput.value = parseInt(swapPlayerSliderInput.value) + 1;
  swapPlayerSliderValue.textContent = `Value = ${swapPlayerSliderInput.value}`;
});

let swapPlayerSliderMinus = document.querySelector(".swapPlayerSlider .minus");

swapPlayerSliderMinus.addEventListener("click", function () {
  swapPlayerSliderInput.value = parseInt(swapPlayerSliderInput.value) - 1;
  swapPlayerSliderValue.textContent = `Value = ${swapPlayerSliderInput.value}`;
});

let otherSwapPlayersSliderPlus = document.querySelector(
  ".otherSwapPlayersSlider .plus"
);
otherSwapPlayersSliderPlus.addEventListener("click", function () {
  otherSwapPlayersSliderInput.value =
    parseInt(otherSwapPlayersSliderInput.value) + 1;
  otherSwapPlayersValue.textContent = `Value = ${otherSwapPlayersSliderInput.value}`;
});

let otherSwapPlayersSliderMinus = document.querySelector(
  ".otherSwapPlayersSlider .minus"
);

otherSwapPlayersSliderMinus.addEventListener("click", function () {
  otherSwapPlayersSliderInput.value =
    parseInt(otherSwapPlayersSliderInput.value) - 1;
  otherSwapPlayersValue.textContent = `Value = ${otherSwapPlayersSliderInput.value}`;
});

function restSwapSubmitBtn() {
  let submitBtns = document.querySelector(".submitBtns");
  let children = submitBtns.children;

  for (let i = 0; i < children.length; i++) {
    children[i].style.display = "none";
  }
}

// select city and show details
function selectCityANDShowDetails(key) {
  console.log(key);
  document.getElementById(
    "cardDetailsCityName"
  ).textContent = `  ${allCells[key].cityName}`;
  document.getElementById(
    "passingFee"
  ).textContent = `  ${allCells[key].rent} : الايجار  `;
  document.getElementById(
    "garagePrice"
  ).textContent = `  ${allCells[key].garagePrice} : سعر الجراج  `;
  document.getElementById(
    "restPrice"
  ).textContent = `  ${allCells[key].restPrice} :  سعر الاستراحة `;
  document.getElementById(
    "marketPrice"
  ).textContent = `  ${allCells[key].marketPrice} : سعر السوق `;
  document.getElementById(
    "garageRent"
  ).textContent = `  ${allCells[key].garageRent} : ايجار الجراج  `;
  document.getElementById(
    "restRent"
  ).textContent = `  ${allCells[key].restRent} : ايجار الاستراحة  `;
  document.getElementById(
    "marketRent"
  ).textContent = `  ${allCells[key].marketRent} : ايجارالسوق  `;
}

let citySelect = document.getElementById("citySelect");
document.addEventListener("change", function () {
  let key = citySelect.value;
  console.log(citySelect.value);
  selectCityANDShowDetails(key);
});
