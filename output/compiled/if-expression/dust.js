(function(){dust.register("if-expression",body_0);function body_0(chk,ctx){return chk.section(ctx.get(["accounts"], false),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<div>").helper("select",ctx,{"block":body_2},{"key":body_9}).write("</div>");}function body_2(chk,ctx){return chk.helper("eq",ctx,{"block":body_3},{"value":"closed"}).helper("eq",ctx,{"block":body_4},{"value":"suspended"}).helper("default",ctx,{"block":body_5},null);}function body_3(chk,ctx){return chk.write("<div>Your account has been closed!</div>");}function body_4(chk,ctx){return chk.write("<div>Your account has been temporarily suspended</div>");}function body_5(chk,ctx){return chk.write("<div>Bank balance:<span class=\"").helper("if",ctx,{"else":body_6,"block":body_7},{"cond":body_8}).write("\">").reference(ctx.get(["formattedBalance"], false),ctx,"h").write("</span></div>");}function body_6(chk,ctx){return chk.write("postive");}function body_7(chk,ctx){return chk.write("negative");}function body_8(chk,ctx){return chk.reference(ctx.get(["balance"], false),ctx,"h").write(" < 0");}function body_9(chk,ctx){return chk.reference(ctx.get(["accountStatus"], false),ctx,"h");}return body_0;})();