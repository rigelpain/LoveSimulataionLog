var DIR = "";

var nodes = null;
var edges = null;
var network = null;

// Called when the Visualization API is loaded.
function draw() {
  // create people.
  // value corresponds with the age of the person
  var DIR = "../img/indonesia/";
  nodes = [
    { id: "kobayashi", shape: "circularImage", image: "missing.png", label: "小林 陽昭", 
      title: "2年\nラーメン食べがち",
    },
    { id: "ayatsuji", shape: "circularImage", image: "./img/ayatsuji.jpg", label: "絢辻 詞", 
      title: 
      "2年\nクラス委員\n創設祭委員",
      color: {
        border: "#AACCEE",
      },
    },
    { id: "sakurai", shape: "circularImage", image: "./img/sakurai.jpg", label: "桜井 梨穂子", 
      title: "2年\n水泳が苦手\n母が冷え性\n可にクリームコロッケが好き\nお小遣い1日200円",
      color: {
        border: "#EEAA99",
      },
    },
    { id: "tanamachi", shape: "circularImage", image: "./img/tanamachi.jpg", label: "棚町 薫", 
      title: "2年",
      color: {
        border: "#AACCAA",
      },
    },
    { id: "nakata", shape: "circularImage", image: "./img/nakata.jpg", label: "中多 紗江", 
      title: "1年\n交際経験なし\nエスカレーターお嬢様学校から編入\n女子高時代女子からの過剰なスキンシップ\n父が過干渉\nパパ呼び\nごはん時に野球中継をよく見る\nお小遣いは月2万\n体が柔らかい\n好き：\n　サラダ・玉子サンド，牛乳，コンビニおでん，ケーキ，パフェ\n苦手：\n　運動，男，年上\n初恋：\n　幼稚園，戦隊ヒーロー俳優",
      color: {
        border: "#EE9999",
      },
    },
    { id: "nanasaki", shape: "circularImage", image: "./img/nanasaki.jpg", label: "七咲 逢",
      title: "1年",
      color: {
        border: "#99BBEE",
      },
    },
    { id: "morishima", shape: "circularImage", image: "./img/morishima.jpg", label: "森嶋 はるか",
      title: "3年",
      color: {
        border: "#AA99EE",
      },
    },
    { id: "miya", shape: "circularImage", image: "./img/miya.jpg", label: "小林 美也",
      title: "1年"
    },
    { id: "takahashi", shape: "circularImage", image: "./img/takahashi.jpg", label: "高橋 麻耶", 
      title: "20代後半"
    },
    { id: "umehara", shape: "circularImage", image: "./img/umehara.jpg", label: "梅原 正吉", 
      title: "2年"
    },
    { id: "itoh", shape: "circularImage", image: "./img/itoh.jpg", label: "伊藤 香苗", },
    { id: "tanaka", shape: "circularImage", image: "./img/tanaka.jpg", label: "田中 恵子", },
    { id: "tsukahara", shape: "circularImage", image: "./img/tsukahara.jpg", label: "塚原 響", 
      title: "3年"
    },
    { id: "yuduki", shape: "circularImage", image: "./img/yuduki.jpg", label: "夕月 琉璃子", 
      title: "3年"
    },
    { id: "hiba", shape: "circularImage", image: "./img/hiba.jpg", label: "飛羽 愛歌", 
      title: "3年"
    },
    { id: "yukari", shape: "circularImage", image: "./img/yukari.jpg", label: "絢辻 縁", 
      title: ""
    },
    { id: "sosetsu-sai", shape: "circularImage", image: "missing.png", label: "創設祭",
      title: "12/24\n文化祭"
    },
  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    { from: 'kobayashi', to: "ayatsuji", label: "同級生" },
    { from: 'kobayashi', to: "miya", label: "兄妹" },
    { from: 'kobayashi', to: "tanamachi", label: "悪友" },
    { from: 'kobayashi', to: "sakurai", label: "幼馴染" },
    { from: 'kobayashi', to: "umehara", label: "同級生" },
    { from: 'kobayashi', to: "morishima", label: "先輩" },
    { from: 'kobayashi', to: "nakata", label: "後輩" },
    { from: 'kobayashi', to: "nanasaki", label: "後輩" },
    { from: 'kobayashi', to: "takahashi", label: "担任" },

    { from: 'morishima', to: "tsukahara", label: "親友" },

    { from: 'nakata', to: "miya", label: "同級生" },
    
    { from: 'tanamachi', to: "tanaka", label: "親友" },
    
    { from: 'ayatsuji', to: "umehara", label: "同級生" },
    { from: 'ayatsuji', to: "sosetsu-sai", label: "委員" },
    { from: 'ayatsuji', to: "yukari", label: "姉妹" },
    
    { from: 'sakurai', to: "itoh", label: "親友" },
    { from: 'sakurai', to: "yuduki", label: "茶道部" },
    { from: 'sakurai', to: "hiba", label: "茶道部" },
    { from: 'yuduki', to: "hiba", label: "茶道部" },
    
    { from: 'nanasaki', to: "tsukahara", label: "水泳部" },
    


    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 4, to: 5 },
    { from: 4, to: 10 },
    { from: 4, to: 6 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
    { from: 8, to: 9 },
    { from: 8, to: 10 },
    { from: 10, to: 11 },
    { from: 11, to: 12 },
    { from: 12, to: 13 },
    { from: 13, to: 14 },
    { from: 9, to: 16 },
  ];

  // create a network
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    nodes: {
      borderWidth: 4,
      size: 20,
      color: {
        border: "#222222",
        background: "#666666",
      },
      font: { color: "#666666" },
    },
    edges: {
      color: "lightgray",
      // arrows: 'to',
      font: { color: "#AAAAAA" },
    },
  };
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});
