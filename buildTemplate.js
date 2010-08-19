function buildTemplate(templateString, vars){
    var regex = /{%.+?%}/g;
    var match = "";
    var matcharray = [];
    var vararray = [];
    var outstring = templateString;
    while (match != null){
        match = regex.exec(templateString);
        if (match != null){
            matcharray.push(match[0]);
        }
    }
    for (var i = 0; i < matcharray.length; i++){
        var stripped = matcharray[i].replace(/({%|%})/g, "");
        if (stripped in vars){
            outstring = outstring.replace(matcharray[i], vars[stripped]);
        } else{
            outstring = outstring.replace(matcharray[i], "");
        }
    }
    return outstring;
}