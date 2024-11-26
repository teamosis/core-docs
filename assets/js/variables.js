var indexURL = "{{ `index.json` | absLangURL }}";
var baseurl =
  "{{ site.BaseURL | safeJS }}{{ if hugo.IsMultiLingual }}{{ site.LanguagePrefix | safeJS }}{{ end }}";
