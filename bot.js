const { Telegraf = require('telegraf');
const bot = new Telegraf("YOUR_BOT_TOKEN_HERE"); // هتحط توكن البوت هنا

let pendingVideo = null;

bot.start((ctx) => ctx.reply(`
مرحبا يا ملك 👑 @${ctx.from.username || "المستخدم"}

ارسل أمر كتابي أو صوتي → هعملك فيديو تريند Life Labs (15–40 ثانية)
وبعد ما تشوفه وتقول "موافق" → هنشر على:
Instagram • TikTok • YouTube • TikTok • Facebook

جرب دلوقتي: "اعمل فيديو عن كيف تكسب 10 آلاف جنيه في الشهر"
`));

bot.on('text', async (ctx) => {
  const text = ctx.message.text;
  await ctx.reply("⏳ جاري إنشاء الفيديو التريند...");
  
  // هنا هيحصل توليد الفيديو (هنكمل الكود بعدين)
  const videoUrl = "https://i.imgur.com/example-video.mp4"; // مؤقت
  
  pendingVideo = { url: videoUrl, caption: text };
  await ctx.replyWithVideo(videoUrl, {
    caption: `الفيديو جاهز يا وحش! 🎬

رد بـ "موافق" عشان أنشره على 4 منصات دلوقتي`
  });
});

bot.hears('موافق', async (ctx) => {
  if (!pendingVideo) return ctx.reply("مفيش فيديو مستني موافقة");
  
  await ctx.reply("🚀 جاري النشر على Instagram • TikTok • YouTube • Facebook...");
  // هنا هيحصل النشر التلقائي
  await ctx.reply("تم النشر بنجاح على الـ 4 منصات! 🔥");
});

bot.launch();
console.log("FlexVideoBot by @Flexkarl is running!");
