function myFunction() {
  var x = document.getElementById("bullet-select");
  var i = x.selectedIndex;
  var vid = document.getElementById("myVideo");
  document.getElementById("myVideoComment").innerHTML = "Here is a one minute video with the largest amount of bullet screen comments in <span class='bullet_episode'>" + x.options[i].text + "</span>.";
  // isSupp = vid.canPlayType("video/mp4");
  if (i == 0) {
    vid.src = "video/01.mp4";
    document.getElementById("description_video").innerHTML = "It’s the first time Youko met with Keiki. Fans teased Keiki is the worst kirin in communication. And they call Keiki “cake” because the sound of Keiki is similar to cake. Also, some fans said we should cherish the time Youko is still girly. In the future, the role of Youko and Keiki will be turned around.";
  } else if (i == 1) {
    vid.src = "video/02.mp4";
    document.getElementById("description_video").innerHTML = "Because Keiki feels a shower of blood, and kirins can’t stand blood, he falls into a coma. The fans worried about him and complained about the king of Kou. Since the king of Kou instigated Kourin to stop Youko’s ascending the throne, Kourin hurt Keiki in this way. She is also afraid of blood, but can’t defy her king’s order.";
  } else if (i == 2) {
    vid.src = "video/03.mp4";
    document.getElementById("description_video").innerHTML = "Youko trusts Takki, whose true intention is to sell Youko to Takki's mother, the mistress of a brothel, as a slave. The fans worried about her safety, thought that she completely exposes her weaknesses, and is therefore disarming. They said Youko is too naïve, needs to quickly grow up.";
  } else if (i == 3) {
    vid.src = "video/04.mp4";
    document.getElementById("description_video").innerHTML = "Monkey shows how Youko’s classmates dislike her through the sword. Actually, the sword will show the phantom of the user’s imagination. Maybe Youko’s classmates worry about her, but Youko lost trust and suspect herself. The fans want Youko to cheer up. And they think the character monkey is great. He represents the seamy side of the voice of the people’s hearts.";
  } else if (i == 4) {
    vid.src = "video/05.mp4";
    document.getElementById("description_video").innerHTML = "Rokuta made his first appearance in the anime. He came to the country Kei to see the new if empress ascended the throne. On the way, he repulsed the youma. The fans are laughing that Rokuta looks like a child, much younger than Keiki. In fact, Rokuta is five hundred years older than Keiki, a totally old guy!";
  } else if (i == 5) {
    vid.src = "video/06.mp4";
    document.getElementById("description_video").innerHTML = "Rakushun made his first appearance in the anime. He saved fainted Youko due to a lack of food and rest. No fan dislike Rakushun! He is so cute, so adorable. The fans call him “Rakushun little angel”. Youko waked up and didn’t trust him because she just escaped from Takki’s hand. But Rakushun treated her nicely and introduce himself to her.";
  } else if (i == 6) {
    vid.src = "video/07.mp4";
    document.getElementById("description_video").innerHTML = "Finally, Youko defeated the monster, monkey, in her mind. He became brave, not always acted according to the real situation. Some fans said that’s due to the love from Rakushun.";
  } else if (i == 7) {
    vid.src = "video/08.mp4";
    document.getElementById("description_video").innerHTML = "The shapeshifter Catty died for saving other people during the youma’s attack. Fans said Catty is too kind only to think of himself. Because he has died, Youko’s sword can’t save him. Fans felt pity.";
  } else if (i == 8) {
    vid.src = "video/09.mp4";
    document.getElementById("description_video").innerHTML = "Youko and Rakushun finally met in the country En after getting separated in the country Kou. Rakushun is waiting for Youko for one month. Fans said Rakushun is a real angel. And some fans hope they fall in love with each other even get married.";
  } else if (i == 9) {
    vid.src = "video/10.mp4";
    document.getElementById("description_video").innerHTML = "Youko and Rakushun are flying to the palace of the country En. Youko feels sorry because Rakushun got hurt on the way with her. But Rakushun insists to go with her. He would be more worried if he lets Youko go alone. Fans continued to say Rakushun is a real angel. And some fans hope they fall in love with each other even get married.";
  } else if (i == 10) {
    vid.src = "video/11.mp4";
    document.getElementById("description_video").innerHTML = "It’s the short part that Enki grow up in the Mout Hou. Because he is a kirin, he also shows the ability of shapeshifting. Fans said he is really cute. Some fans thought he is similar to Monkey King.";
  } else if (i == 11) {
    vid.src = "video/12.mp4";
    document.getElementById("description_video").innerHTML = "Yuka Sugimoto (杉本優香), Youko’s classmates in Japan, got transported to Kou along with Youko. She loves reading fantasy books and believes herself to be “chosen one”. In this case, she was jealous and discontent when Keiki treated Youko differently. As a result, the king of Kou takes advantage of Yuka to fight against Youko.<br>\
    <br>\
    This part is the last attempt that the king of Kou tried to kill Youko. Yuka finally realizes that she is not the ”chosen one”. The Twelve Kingdom is not her world. Yuka and Youko reconciled.<br>\
    <br>\
    Audiences commented that Yuka came to a profound realization. They said she finally cure of the Chūnibyō.";
  } else if (i == 12) {
    vid.src = "video/13.mp4";
    document.getElementById("description_video").innerHTML = "Youko marches the army to save Keiki and quell the disturbances with the help of the king of En. Yuka said she wants to go with Youko. Right now, she has become considerably humble. Audiences said they look like a couple. Some audiences said Youko is so handsome, like Mulan.";
  } else if (i == 13) {
    vid.src = "video/14.mp4";
    document.getElementById("description_video").innerHTML = "This episode is a review episode about the first book. The highest part is the first time that Youko met Keiki. The audience complained that Keiki was so strict and was unable to clarify the situation, which caused a lot of misunderstanding.";
  } else if (i == 14) {
    vid.src = "video/15.mp4";
    document.getElementById("description_video").innerHTML = "Yuka is sent back to Japan. She met another “person” who also went to the world of the Twelve Kingdoms and back to Japan. Actually, the “person” is Taiki. Because Taiki lost his horn, he also lost the memory about the world of the Twelve Kingdoms. And his Nyokai (female youma, like kirin’s mother) gradually lost control after he went back to Japan. After they met, Nyokai suspected Yuka is the enemy, want to hurt her. At that time, Yuka said she is the empress of Kei’s friend, she won’t hurt Taiki. Then Nyokai disappear.<br>\
    <br>\
    The audience smiled that Yuka has the background when she said she is Youko’s friend. Others worried about Taiki’s safety.";
  } else if (i == 15) {
    vid.src = "video/16.mp4";
    document.getElementById("description_video").innerHTML = "Taiki went back to the world of the Twelve Kingdoms after 10 years since birth. Nyosen (female sages, taking care of kirins) feel he is different from other kirins. Because he grew up in Japan. The audience commented Taiki is so lovely, adorable. Some also sighed about his uncertain life and fate.";
  } else if (i == 16) {
    vid.src = "video/17.mp4";
    document.getElementById("description_video").innerHTML = "Taiki doesn’t know how to shift from human to animal, so he asked Keiki for help. However, Keiki is a very bad teacher. He is too cold. In this case, Taiki was very sad, even suspected if he is a kirin. The audiences complained again that Keiki is too awkward and cold to express himself, and too easy to cause misunderstanding. Some also worried about Taiki.";
  } else if (i == 17) {
    vid.src = "video/18.mp4";
    document.getElementById("description_video").innerHTML = "It’s the first time that Taiki and Risai met each other. Risai is a royal female general. And she is also Taiki’s close friend. Many audiences commented that they love her and feel pity because Risai lost her arm during the riot in the book Hisho’s Birds.";
  } else if (i == 18) {
    vid.src = "video/19.mp4";
    document.getElementById("description_video").innerHTML = "Because Taiki grew up in Japan, he had no idea about selecting a king for the country as a kirin. He thought he wrongly selected a king due to loneliness. The audiences said the king and the kirin of Tai can’t frankly communicate with each other, which causing uncertain actions after they went back Tai. They also sighed about his uncertain life and fate.";
  } else if (i == 19) {
    vid.src = "video/20.mp4";
    document.getElementById("description_video").innerHTML = "Close people know what Taiki worried about. In order to help Taiki understand he didn’t select a wrong, they inserted a drama into this. The audiences laughed that the king of En and Enki are really like bad guys. They said, “save my dear Taiki from those hateful guys!”<br>\
    <br>\
    During the play, the king of En was hit by Enki because his acting was overdone. The audiences also laughed at the king of En, saying:” Those who have done evil things will come to no good end.”";
  } else if (i == 20) {
    vid.src = "video/21.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 21) {
    vid.src = "video/22.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 22) {
    vid.src = "video/23.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 23) {
    vid.src = "video/24.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 10) {
    vid.src = "video/11.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 24) {
    vid.src = "video/25.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 25) {
    vid.src = "video/26.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 26) {
    vid.src = "video/27.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 27) {
    vid.src = "video/28.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 28) {
    vid.src = "video/29.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 29) {
    vid.src = "video/30.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 30) {
    vid.src = "video/31.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 31) {
    vid.src = "video/32.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 32) {
    vid.src = "video/33.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 33) {
    vid.src = "video/34.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 34) {
    vid.src = "video/35.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 35) {
    vid.src = "video/36.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 36) {
    vid.src = "video/37.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 37) {
    vid.src = "video/38.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 38) {
    vid.src = "video/39.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 39) {
    vid.src = "video/40.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 40) {
    vid.src = "video/41.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 41) {
    vid.src = "video/42.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 42) {
    vid.src = "video/43.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 43) {
    vid.src = "video/44.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  } else if (i == 44) {
    vid.src = "video/45.mp4";
    document.getElementById("description_video").innerHTML = "test3";
  }
  vid.load();
}
