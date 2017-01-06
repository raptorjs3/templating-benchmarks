var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_str = marko_helpers.s,
    marko_attr = marko_helpers.a,
    marko_loadTag = marko_helpers.t,
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag")),
    init_widgets_tag = marko_loadTag(require("marko/widgets/taglib/init-widgets-tag"));

function render(data, out) {
  out.w("<html><head><title>" +
    marko_str(data.title) +
    "</title></head><body><p>" +
    marko_str(data.text) +
    "</p>");

  for (var i=0, len=data.projects.length; i < len; i++) {
    var project = data.projects[i];

    out.w("<a" +
      marko_attr("href", project.url, false) +
      ">" +
      marko_str(project.name) +
      "</a><p>" +
      marko_str(project.description) +
      "</p>");
  }

  if (!data.projects.length) {
    out.w("No projects");
  }

  await_reorderer_tag({}, out);

  init_widgets_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;
