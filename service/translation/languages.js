export default {
    getLanguages : function () {
        var languages = [];
        for (var lang in this)
        {
            if (typeof this[lang] === "string")
                languages.push(this[lang]);
        }
        return languages;
    },
    EN: "en",
    ES: "es"
};
