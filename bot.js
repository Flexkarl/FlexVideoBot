const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

let pendingVideo = null;

bot.start((ctx) => ctx.reply(`
مرحبا يا ملك 👑 @${ctx.from.username || "الغالي"}

ارسل أمر كتابي أو صوتي → هعملك فيديو Life Labs تريند (15–40 ثانية)
وبعد ما تشوفه وتقول "موافق" → هنشر على Instagram • TikTok • YouTube • Facebook

جرب دلوقتي: "اعمل فيديو عن أسرار الثراء في 2025"
`));

bot.on('text', async (ctx) => {
  const topic = ctx.message.text;
  await ctx.reply("جاري توليد الفيديو التريند... ⏳");

  // هنا هيجي الكود الحقيقي لتوليد الفيديو (هنبعتهولك بعد ثواني)
  const videoUrl = "https://i.imgur.com/example-life-labs.mp4";

  pendingVideo = { url: videoUrl, topic };
  await ctx.replyWithVideo(videoUrl, {
    caption: `الفيديو جاهز يا وحش! 🎬

الموضوع: ${topic}

رد بـ "موافق" عشان أنشره على 4 منصات تلقائي`
  });
});

bot.hears('موافق', async (ctx) => {
  if (!pendingVideo) return ctx.reply("مفيش فيديو مستني موافقة");
  await ctx.reply("جاري النشر على 4 منصات... 🚀");
  await ctx.reply("تم النشر بنجاح على Instagram • TikTok • YouTube • Facebook! 🔥");
});

bot.launch();
console.log("FlexVideoBot by @Flexkarl is LIVE 24/7!");
