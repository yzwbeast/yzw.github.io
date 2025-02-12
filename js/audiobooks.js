
// 示例书籍数据
const book = {
  "1.0": {
    chapterTitle: "Introduction and Plan of the Work",
    content: [
      { text: "Play full audio", translation: "播放完整音频", audio: "/audio/p/The Wealth of Nations_ Preface.mp3" },
      { text: "Introduction and Plan of the Work", translation: "工作介绍及计划", audio: "/audio/p/p01.MP3" },
      { text: "The annual labour of every nation is the fund which originally supplies it with all the necessaries and conveniences of life which it annually consumes, and which consist always either in the immediate produce of that labour, or in what is purchased with that produce from other nations.", translation: "对每一个国家来说，供应全国人民每年消费的生活必需品与便利品的根本来源，是全体国民每年的劳动；那些被消费掉的必需品与便利品，如果不是由该劳动直接生产出来的，便是用该劳动的产出物向国外购买的。", audio: "/audio/p/p02.MP3" },
      { text: "According therefore as this produce, or what is purchased with it, bears a greater or smaller proportion to the number of those who are to consume it, the nation will be better or worse supplied with all the necessaries and conveniences for which it has occasion.", translation: "因此，全国对必需品与便利品的全部需求，获得供应的情况是好是坏，就按照全国劳动产出，或者用该产出买来的物品数量，相对于需要消费该产出的人口比例是大或是小来决定。", audio: "/audio/p/p03.MP3" },
      { text: "But this proportion must in every nation be regulated by two different circumstances; first, by the skill, dexterity, and judgment with which its labour is generally applied; and, secondly, by the proportion between the number of those who are employed in useful labour, and that of those who are not so employed. Whatever be the soil, climate, or extent of territory of any particular nation, the abundance or scantiness of its annual supply must, in that particular situation, depend upon those two circumstances.", translation: "在每一个国家，这个比例通常取决于两个不同的条件。第一，该国在劳动应用上，普遍展现了怎样的技巧、熟练度与判断力；第二，在全国的劳动人口当中，有多少人从事有用的劳动。任何国家，不拘土壤、气候或领土大小，每年产出的多寡，在其特有的自然条件与领土范围内，一定取决于这两个条件。", audio: "/audio/p/p04.MP3" },
      { text: "The abundance or scantiness of this supply, too, seems to depend more upon the former of those two circumstances than upon the latter. Among the savage nations of hunters and fishers, every individual who is able to work, is more or less employed in useful labour, and endeavours to provide, as well as he can, the necessaries and conveniences of life, for himself, or such of his family or tribe as are either too old, or too young, or too infirm to go a hunting and fishing. Such nations, however, are so miserably poor that, from mere want, they are frequently reduced, or, at least, think themselves reduced, to the necessity sometimes of directly destroying, and sometimes of abandoning their infants, their old people, and those afflicted with lingering diseases, to perish with hunger, or to be devoured by wild beasts. Among civilised and thriving nations, on the contrary, though a great number of people do not labour at all, many of whom consume the produce of ten times, frequently of a hundred times more labour than the greater part of those who work; yet the produce of the whole labour of the society is so great that all are often abundantly supplied, and a workman, even of the lowest and poorest order, if he is frugal and industrious, may enjoy a greater share of the necessaries and conveniences of life than it is possible for any savage to acquire.", translation: "其次，在这两个条件中，第一个条件对产出多寡的影响似乎又比第二个来得重要。未开化的狩猎民族，每个有工作能力的人都算是在从事有用的劳动，而且也都尽可能地为自己和家里（或族里）那些无力狩猎的老弱妇孺，供应生活必需品与便利品。然而这些民族却穷得如此可怜，以致因为物资匮乏，经常被迫（或者至少自认为被迫）不得不主动弄死家族里的婴儿、老人和久病缠身的人，要不就将这些人丢弃，让他们饿死或被野兽吃掉。相反的，在文明兴盛的民族里，无所事事的人不仅为数众多，而且当中有许多人个别消费掉的产品，还比大部分劳动者的消费多出十倍，甚至百倍；然而，由于整个社会的劳动产出如此巨大，以至每个人都得到丰富的供应。而且任何一个工人，即使是最贫穷低下的，只要勤俭，就会比任何野蛮人享有更多的生活必需品与便利品。", audio: "/audio/p/p05.MP3" },
      { text: "The causes of this improvement, in the productive powers of labour, and the order, according to which its produce is naturally distributed among the different ranks and conditions of men in the society, make the subject of the first book of this Inquiry.", translation: "本书的第一卷就在研究劳动生产力得到改善的原因，以及劳动产出在社会各阶层与不同条件的人民之间，自然而然分配的次序。", audio: "/audio/p/p06.MP3" },
      { text: "Whatever be the actual state of the skill, dexterity, and judgment with which labour is applied in any nation, the abundance or scantiness of its annual supply must depend, during the continuance of that state, upon the proportion between the number of those who are annually employed in useful labour, and that of those who are not so employed. The number of useful and productive labourers, it will hereafter appear, is everywhere in proportion to the quantity of capital stock which is employed in setting them to work, and to the particular way in which it is so employed. The second book, therefore, treats of the nature of capital stock, of the manner in which it is gradually accumulated, and of the different quantities of labour which it puts into motion, according to the different ways in which it is employed.", translation: "任何国家不管实际上以怎样的技巧、熟练度与判断力应用在劳动上，每年产出的多寡，在该技巧、熟练度与判断力既定不变的情况下，势必取决于全国劳动人口中，每年从事有用劳动的比例。下文会说明，不管在什么地方，有用的生产性劳动人数，都取决于推动这种劳动工作的资本数量和资本实际的使用方式。因此，本书第二卷将说明资本的性质，资本逐渐累积的方式，以及资本使用方式不同，所推动的劳动数量又会有何不同。", audio: "/audio/p/p07.MP3" },
      { text: "Nations tolerably well advanced as to skill, dexterity, and judgment, in the application of labour, have followed very different plans in the general conduct or direction of it; those plans have not all been equally favourable to the greatness of its produce. The policy of some nations has given extraordinary encouragement to the industry of the country; that of others to the industry of towns. Scarce any nation has dealt equally and impartially with every sort of industry. Since the downfall of the Roman empire, the policy of Europe has been more favourable to arts, manufactures, and commerce, the industry of towns, than to agriculture, the industry of the country. The circumstances which seem to have introduced and established this policy are explained in the third book.", translation: "一些应用在劳动上的技巧、熟练度与判断力各方面都算得上相当进步的国家，已有一段时日在一般性的劳动管理或引导上，采取了大不相同的政策；而现在看来，那些策略并非全然有利于增加劳动产出数量。有些国家的政策特别鼓励乡村产业，有些国家则非常鼓励城市产业。几乎没有任何国家对每种产业都一视同仁，不偏不倚。自从罗马帝国覆亡之后，欧洲各国的政策对手工艺业、制造业和商业等城市产业有利的程度，一直优于农业这种乡村产业。本书第三卷将尝试说明这种政策的由来。", audio: "/audio/p/p08.MP3" },
      { text: "Though those different plans were, perhaps, first introduced by the private interests and prejudices of particular orders of men, without any regard to, or foresight of, their consequences upon the general welfare of the society; yet they have given occasion to very different theories of political economy; of which some magnify the importance of that industry which is carried on in towns, others of that which is carried on in the country. Those theories have had a considerable influence, not only upon the opinions of men of learning, but upon the public conduct of princes and sovereign states. I have endeavoured, in the fourth book, to explain, as fully and distinctly as I can, those different theories, and the principal effects which they have produced in different ages and nations.", translation: "虽然这种种不同的政策，刚开始也许是特殊阶级基于私利与偏见所推动的，当初不仅完全不顾，也完全不知道，它们对一般人民的福祉会造成什么后果；然而这些政策后来却产生了许多大不相同的政治经济学说，其中有些夸大城市产业的重要性，另外有些则夸大乡村产业。那些学说不仅对学者的意见相当有影响，而且也往往左右了君主与国家的政策。在本书第四卷，我将尽可能周详解释这些不同的学说，以及它们在不同时代与国家所产生的重要影响。", audio: "/audio/p/p09.MP3" },
      { text: "To explain in what has consisted the revenue of the great body of the people, or what has been the nature of those funds which, in different ages and nations, have supplied their annual consumption, is the object of these four first books. The fifth and last book treats of the revenue of the sovereign, or commonwealth. In this book I have endeavoured to show, first, what are the necessary expenses of the sovereign, or commonwealth; which of those expenses ought to be defrayed by the general contribution of the whole society; and which of them by that of some particular part only, or of some particular members of it: secondly, what are the different methods in which the whole society may be made to contribute towards defraying the expenses incumbent on the whole society, and what are the principal advantages and inconveniences of each of those methods: and, thirdly and lastly, what are the reasons and causes which have induced almost all modern governments to mortgage some part of this revenue, or to contract debts, and what have been the effects of those debts upon the real wealth, the annual produce of the land and labour of the society.", translation: "本书前四卷的主旨在于，解释全体国民收入的根本来源是什么，以及就不同的时代与国家，说明每年供应全体国民消费的那些资本储备的性质。本书第五卷，也是最后一卷，则是讨论君主或政府的收入。在这一卷里，我将努力说明（1）哪些是君主或政府的必要费用；在这些费用当中，哪些该由社会一般人民的奉献来支应；哪些则该由特别的社会团体或个人来承担。（2）有哪些不同的方法，可以让一般社会成员为整个社会应该承担的费用做出奉献；这些方法分别有哪些重要的优缺点。（3）最后一点则是要说明，究竟是什么理由和原因，使得几乎所有现代政府都把这种收入的一部分拿去抵押（或者简单地说，几乎所有现代政府都举债度日）；而那种债务，对整个社会的真实财富，亦即对整个社会土地与劳动每年的产出，会造成什么影响。", audio: "/audio/p/p10.MP3" }
    ]
  },
  "1.1": {
    chapterTitle: "Chapter I. Of the Division of Labour",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.2": {
    chapterTitle: "Chapter II. Of the Principle which gives occasion to the Division of Labour",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.3": {
    chapterTitle: "Chapter III. That the Division of Labour is limited by the Extent of the Market",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.4": {
    chapterTitle: "Chapter IV. Of the Origin and Use of Money",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.5": {
    chapterTitle: "Chapter V. Of the Real and Nominal Price of Commodities, or of their Price in Labour, and their Price in Money",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.6": {
    chapterTitle: "Chapter VI. Of the Component Parts of the Price of Commodities",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.7": {
    chapterTitle: "Chapter VII. Of the Natural and Market Price of Commodities",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.8": {
    chapterTitle: "Chapter VIII. Of the Wages of Labour",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.9": {
    chapterTitle: "Chapter IX. Of the Profits of Stock",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.10": {
    chapterTitle: "Chapter X. Of Wages and Profit in the different Employments of Labour and Stock",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.10.1": {
    chapterTitle: "Part 1 Inequalities arising from the Nature of the Employments themselves",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.10.2": {
    chapterTitle: "Part 2 Inequalities by the Policy of Europe",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.11": {
    chapterTitle: "Chapter XI. Of the Rent of Land",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.11.1": {
    chapterTitle: "Part 1 Of the Produce of Land which always affords Rent",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.11.2": {
    chapterTitle: "Part 2 Of the Produce of Land which sometimes does and sometimes does not afford Rent",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "1.11.3": {
    chapterTitle: "Part 3 Of the Variations in the Proportion between the respective Values of that Sort of Produce which always affords Rent, and of that which sometimes does and sometimes does not afford Rent",
    content: [
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      },
      {
        text: "....",
        translation: "....",
        audio: "/audio/.mp3"
      }
    ]
  },
  "2.1": {
    "chapterTitle": "Chapter I. Of the Division of Stock",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "2.2": {
    "chapterTitle": "Chapter II. Of Money Considered as a Particular Branch of the General Stock of the Society, or of the Expense of Maintaining the National Capital",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "2.3": {
    "chapterTitle": "Chapter III. Of the Accumulation of Capital, or of Productive and Unproductive Labour",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "2.4": {
    "chapterTitle": "Chapter IV. Of Stock Lent at Interest",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "2.5": {
    "chapterTitle": "Chapter V. Of the Different Employment of Capitals",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "3.1": {
    "chapterTitle": "Chapter I. Of the Natural Progress of Opulence",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "3.2": {
    "chapterTitle": "Chapter II. Of the Discouragement of Agriculture in the ancient State of Europe after the Fall of the Roman Empire",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "3.3": {
    "chapterTitle": "Chapter III. Of the Rise and Progress of Cities and Towns after the Fall of the Roman Empire",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "3.4": {
    "chapterTitle": "Chapter IV. How the Commerce of the Towns Contributed to the Improvement of the Country",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.1": {
    "chapterTitle": "Chapter I. Of the Principle of the Commercial, or Mercantile System",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.2": {
    "chapterTitle": "Chapter II. Of Restraints upon the Importation from Foreign Countries of such Goods as can be produced at Home",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.3": {
    "chapterTitle": "Chapter III. Of the extraordinary Restraints upon the Importation of Goods of almost all kinds from those Countries with which the Balance is supposed to be disadvantageous",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.3.1": {
    "chapterTitle": "Part 1 Of the Unreasonableness of those Restraints even upon the Principles of the Commercial System",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.3.2": {
    "chapterTitle": "Part 2 Of the Unreasonableness of those extraordinary Restraints upon other Principles",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.4": {
    "chapterTitle": "Chapter IV. Of Drawbacks",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.5": {
    "chapterTitle": "Chapter V. Of Bounties",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.6": {
    "chapterTitle": "Chapter VI. Of Treaties of Commerce",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.7": {
    "chapterTitle": "Chapter VII. Of Colonies",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.7.1": {
    "chapterTitle": "Part 1 Of the Motives for establishing new Colonies",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.7.2": {
    "chapterTitle": "Part 2 Causes of Prosperity of New Colonies",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.7.3": {
    "chapterTitle": "Part 3 Of the Advantages which Europe has derived from the Discovery of America, and from that of a Passage to the East Indies by the Cape of Good Hope",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.8": {
    "chapterTitle": "Chapter VIII. Conclusion of the Mercantile System",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.9": {
    "chapterTitle": "Chapter IX. Of the Agricultural Systems, or of those Systems of Political Economy which represent the Produce of Land as either the sole or the principal Source of the Revenue and Wealth every Country",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "4.10": {
    "chapterTitle": "Appendix",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "5.1": {
    "chapterTitle": "Chapter I. Of the Expenses of the Sovereign or Commonwealth",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "5.1.1": {
    "chapterTitle": "Part 1 Of the Expense of Defence",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "5.1.2": {
    "chapterTitle": "Part 2 Of the Expense of Justice",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "5.1.3": {
    "chapterTitle": "Part 3 Of the Expense of Public Works and Public Institutions",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "5.1.4": {
    "chapterTitle": "Part 4 Of the Expense of Supporting the Dignity of the Sovereign",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "5.2": {
    "chapterTitle": "Chapter II. Of the Sources of the General or Public Revenue of the Society",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "5.2.1": {
    "chapterTitle": "Part 1 Of the Funds or Sources of Revenue which may peculiarly belong to the Sovereign or Commonwealth",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "5.2.2": {
    "chapterTitle": "Part 2 Of Taxes",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
  "5.3": {
    "chapterTitle": "Chapter III. Of Public Debts",
    "content": [
      {
        "text": "....",
        "translation": "....",
        "audio": "/audio/.mp3"
      }
    ]
  },
};

const selector = document.getElementById("chapter-selector");
const contentContainer = document.getElementById("book-content");
const toggleButton = document.getElementById("toggleTranslations");
let translationsVisible = true;
let currentAudio = null;

// 加载章节内容
function loadChapter(chapterKey, contentContainer) {
  const chapter = book[chapterKey];
  if (!chapter) {
    console.error(`章节 ${chapterKey} 不存在`);
    return;
  }

  // 清空内容容器
  contentContainer.innerHTML = `<h2>${chapter.chapterTitle}</h2>`;

  // 遍历章节内容并生成句子和翻译
  chapter.content.forEach((item) => {
    const sentenceContainer = document.createElement("div");
    sentenceContainer.className = "sentence-container";

    // 句子文本部分
    const sentenceText = document.createElement("p");
    sentenceText.className = "sentence";
    sentenceText.innerHTML = `
      ${item.text} 
      <a class="play-inline-button" onclick="toggleAudio('${item.audio}', this)">🔊 Play</a>
    `;
    sentenceContainer.appendChild(sentenceText);

    // 翻译部分
    const translationText = document.createElement("p");
    translationText.className = "translation";
    translationText.textContent = item.translation;
    sentenceContainer.appendChild(translationText);

    // 添加到内容容器
    contentContainer.appendChild(sentenceContainer);
  });
}


// 播放/暂停音频
function toggleAudio(audioSrc, button) {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    button.textContent = "🔊 Play";
    if (currentAudio.src.includes(audioSrc)) {
      currentAudio = null;
      return;
    }
  }

  currentAudio = new Audio(audioSrc);
  currentAudio.play();
  button.textContent = "⏸ Pause";
  currentAudio.onended = () => {
    button.textContent = "🔊 Play";
  };
}

// 切换中文显示
toggleButton.onclick = function () {
  translationsVisible = !translationsVisible;
  document.querySelectorAll(".translation").forEach((element) => {
    element.style.display = translationsVisible ? "block" : "none";
  });
  toggleButton.textContent = translationsVisible ? "隐藏中文" : "显示中文";
};

// 监听下拉菜单变化
selector.onchange = function () {
  loadChapter(selector.value);
};

// 初始化选择器
function initChapterSelector() {
  const chapterSelector = document.getElementById("chapter-selector");
  const contentContainer = document.getElementById("book-content");

  // 确保元素存在
  if (!chapterSelector || !contentContainer) {
    console.error("chapter-selector 或 book-content 未找到！");
    return;
  }

  // 遍历 book 数据，生成下拉选项
  for (const [key, chapter] of Object.entries(book)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = chapter.chapterTitle;
    chapterSelector.appendChild(option);
  }

  // 设置默认加载章节（自动选择第一个章节）
  const defaultChapter = "1.0"; // 假设 "1.0" 是第一章
  chapterSelector.value = defaultChapter; // 设置选择器的默认值
  loadChapter(defaultChapter, contentContainer); // 自动加载第一章

  // 添加选择器 onchange 事件
  chapterSelector.onchange = function () {
    const selectedChapter = chapterSelector.value;
    loadChapter(selectedChapter, contentContainer);
  };
}


// 调用初始化章节选择器函数
initChapterSelector();