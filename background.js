'use strict';

const data = {
  "": {
    link: "#",
    des: "Enter any associated shortcut to QuickSearch!"
  },
  "r": {
    link : "https://reddit.com/r/",
    des: "Direct Subreddit"
  },
  "y": {
    link : "https://www.youtube.com/results?search_query=",
    des: "Youtube search"
  },
  "d": {
    link : "https://duckduckgo.com/?q=",
    des: "DuckDuckGo search"
  },
  "n": {
    link: "https://www.netflix.com/search?q=",
    des: "Netflix search"
  },
  "so": {
    link: "https://stackoverflow.com/search?q=",
    des: "StackOverflow search"
  },
  "gh": {
    link: "https://github.com/search?q=",
    des: "Github search"
  },
  "giphy": {
    link: "https://giphy.com/search/",
    des: "Giphy search"
  },
  "w": {
    link: "https://en.wikipedia.org/wiki/",
    des: "Wikipedia page"
  },
  "azl": {
    link: "https://search.azlyrics.com/search.php?q=",
    des: "AZlyrics search"
  },
  "imdb": {
    link: "https://www.imdb.com/find?ref_=nv_sr_fn&q=",
    des: "IMDb search"
  },
  "st": {
    link: "https://store.steampowered.com/search/?term=",
    des: "Steam search"
  },
  "a": {
    link: "https://www.amazon.com/s?k=",
    des: "Amazon.com search"
  },
  "auk": {
    link: "https://www.amazon.co.uk/s?k=",
    des: "Amazon.co.uk search"
  },
  "ain": {
    link: "https://www.amazon.in/s?k=",
    des: "Amazon.in search"
  },
  "t": {
    link: "https://twitter.com/search?q=",
    des: "Twitter search"
  },
  "tw": {
    link: "https://www.twitch.tv/",
    des: "Twitch search"
  },
  "e": {
    link: "https://www.ebay.com/sch/i.html?LH_CAds=&_ex_kw=&_fpos=&_fspt=1&_mPrRngCbx=1&_nkw=",
    des: "ebay search"
  },
  "euk": {
    link: "https://www.ebay.com/sch/i.html?LH_CAds=&_ex_kw=&_fpos=&_fspt=1&_mPrRngCbx=1&_nkw=",
    des: "ebay.co.uk search"
  },
  "imgur": {
    link: "https://imgur.com/search?q=",
    des: "imgur search"
  },
  "ae": {
    link: "https://www.aliexpress.com/wholesale?SearchText=",
    des: "AliExpress search"
  },
  "ab": {
    link: "https://www.alibaba.com/trade/search?SearchText=",
    des: "Alibaba search"
  },
  "se": {
    link: "https://stackexchange.com/search?q=",
    des: "StackExchange search"
  },
  "ig": {
    link: "https://www.instagram.com/explore/tags/",
    des: "Instagram search"
  },
  "igif": {
    link: "https://imgur.com/search/score?q=ext%3Agif+",
    des: "Imgur gifs search"
  },
  "gi": {
    link: "https://www.google.com/search?tbm=isch&q=",
    des: "Google Images search"
  },
  "mdn": {
    link: "https://developer.mozilla.org/en-US/search?q=",
    des: "Mozilla Developer Network (MDN) search"
  },
  "fb": {
    link: "https://www.facebook.com/s.php?q=",
    des: "Facebook search"
  }, 
  "p": {
    link: "https://www.pinterest.com/search/pins/?q=",
    des: "Pinterest search"
  },
  "thesaurus": {
    link: "https://www.thesaurus.com/misspelling?term=",
    des: "Thesaurus word search"
  },
  "ud": {
    link: "https://www.urbandictionary.com/define.php?term=",
    des: "Urban Dictionary word search"
  },
  "udemy": {
    link: "https://www.udemy.com/courses/search/?q=",
    des: "Udemy search"
  },
  "gm": {
    link: "https://www.google.com/maps?hl=en&q=",
    des: "Google Maps find location"
  },
  "isup": {
    link: "https://downforeveryoneorjustme.com/",
    des: "Check if this website is up or not"
  },
  "rarbgget": {
    link: "https://rarbgget.org/torrents.php?search=",
    des: "Rarbgget torrent search"
  },
  "tpb": {
    link: "https://thepiratebay.org/search/",
    des: "ThePirateBay torrent search"
  },
  "daraz": {
    link: "https://www.daraz.pk/catalog/?q=",
    des: "Daraz.pk search"
  }
};


chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    let splittedText = text.split(" ");
    let key = splittedText[0].toLowerCase();
    let search = splittedText.slice(1, splittedText.length).join(" ");
    try {
      suggest([
        {content: " ", description: `'${search}' ${data[key].des}`}
      ]);
    }
    catch(e) {
      suggest([
        {content: " ", description: "QuickSearch: There is no shortcut associated with '" + key + "'"}
      ]);
    }
  });


chrome.omnibox.onInputEntered.addListener(
    function(text) {
        let splittedText = text.split(" ");
        let key = splittedText[0].toLowerCase();
        let search = splittedText.slice(1, splittedText.length).join(" ");

        try {
          let url = data[key].link;

          // Encode user input for special characters , / ? : @ & = + $ #
          var newURL = url + encodeURIComponent(search);
          // Opening URL in the same tab
          chrome.tabs.update({ url: newURL});
        }
        catch(e) {
          alert('There is no shortcut associated with "' + key + '".');
        }
    });