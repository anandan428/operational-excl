import delay from './delay';


const articles = [
    {
"Id":"1",
"Category":"General",
"AurthorName":"GuruPrasad",
"Heading":"The Journey of Dot Net Technical forum",
"Content":"The .Net Technical forum was initiated to Promote .Net Techincal knowledge sharing  using Yammer within  our organization with a yammer  group called ”.Net Technical Forum”  . One of the objective of the group was to to get the queires ( related to .net area ) from the .Net developers & provide quickly the solutions to these queires with the support of SMEs. \
The team started the journey on June 2017 by posting technical questions in to .Net Technical forum and providing answers to those questions.The major challenges was to bring all .Net associates in to .Net Technical Forum and make it more popular & usefull.  To make the group more popular, the group started a series of quiz event with .Net questions . The winners were awarded. \
  \
The members of core team of .Net Technical forum are Rajesh, Shreesha, Guru, Simanta, Vinay, Hamid, Shivaraj, Rohit, Balamurugan , Suresh Iyer \
\
The same group is also handling the  Techno Mantra . They publish articles related to .Net domain, biweekly in .Net Technical Forum on Yammer.\
Some of the technical articles covered by them are Single Page Application in Java script Framework , Azure, .Net Core, Micro services, IOT, Big Data & Aartificial Inteligence.\
\
Currently the .Net technical forum is used by many of the developers for posting their technical queries & getting the solution for them quickly. ",
"Reporter":"Bala"},
{
    "Id":"2",
    "Category":"General",
    "AurthorName":"GuruPrasad",
    "Heading":"The Journey of Dot Net Technical forum",
    "Content":"The .Net Technical forum was initiated to Promote .Net Techincal knowledge sharing  using Yammer within  our organization with a yammer  group called ”.Net Technical Forum”  . One of the objective of the group was to to get the queires ( related to .net area ) from the .Net developers & provide quickly the solutions to these queires with the support of SMEs. \
    The team started the journey on June 2017 by posting technical questions in to .Net Technical forum and providing answers to those questions.The major challenges was to bring all .Net associates in to .Net Technical Forum and make it more popular & usefull.  To make the group more popular, the group started a series of quiz event with .Net questions . The winners were awarded. \
      \
    The members of core team of .Net Technical forum are Rajesh, Shreesha, Guru, Simanta, Vinay, Hamid, Shivaraj, Rohit, Balamurugan , Suresh Iyer \
    \
    The same group is also handling the  Techno Mantra . They publish articles related to .Net domain, biweekly in .Net Technical Forum on Yammer.\
    Some of the technical articles covered by them are Single Page Application in Java script Framework , Azure, .Net Core, Micro services, IOT, Big Data & Aartificial Inteligence.\
    \
    Currently the .Net technical forum is used by many of the developers for posting their technical queries & getting the solution for them quickly. ",
    "Reporter":"Bala"},
];

class ArticlesApi {
  static getAllArticles(){
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(articles)
          }, delay);
      });
  }
}

export default ArticlesApi;