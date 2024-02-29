import { $ as bold, a0 as red, a1 as yellow, a2 as dim, a3 as blue } from './chunks/astro_yvkYO_vT.mjs';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.1ojaj.css","pattern":"^\\/_astro\\/ec\\.1ojaj\\.css$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.1ojaj.css","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro-expressive-code@0.33.4_astro@4.4.5/node_modules/astro-expressive-code/routes/styles.ts","pathname":"/_astro/ec.1ojaj.css","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.sgewm.js","pattern":"^\\/_astro\\/ec\\.sgewm\\.js$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.sgewm.js","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro-expressive-code@0.33.4_astro@4.4.5/node_modules/astro-expressive-code/routes/scripts.ts","pathname":"/_astro/ec.sgewm.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.4.5_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/code01.g5qDiTfd.css"}],"routeData":{"route":"/2023/11/07/codes/code01","isIndex":false,"type":"page","pattern":"^\\/2023\\/11\\/07\\/Codes\\/code01\\/?$","segments":[[{"content":"2023","dynamic":false,"spread":false}],[{"content":"11","dynamic":false,"spread":false}],[{"content":"07","dynamic":false,"spread":false}],[{"content":"Codes","dynamic":false,"spread":false}],[{"content":"code01","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/2023/11/07/Codes/code01.md","pathname":"/2023/11/07/Codes/code01","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/code01.g5qDiTfd.css"}],"routeData":{"route":"/2023/11/07/codes/code02","isIndex":false,"type":"page","pattern":"^\\/2023\\/11\\/07\\/Codes\\/code02\\/?$","segments":[[{"content":"2023","dynamic":false,"spread":false}],[{"content":"11","dynamic":false,"spread":false}],[{"content":"07","dynamic":false,"spread":false}],[{"content":"Codes","dynamic":false,"spread":false}],[{"content":"code02","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/2023/11/07/Codes/code02.md","pathname":"/2023/11/07/Codes/code02","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/code01.g5qDiTfd.css"}],"routeData":{"route":"/2023/11/07/codes/code03","isIndex":false,"type":"page","pattern":"^\\/2023\\/11\\/07\\/Codes\\/code03\\/?$","segments":[[{"content":"2023","dynamic":false,"spread":false}],[{"content":"11","dynamic":false,"spread":false}],[{"content":"07","dynamic":false,"spread":false}],[{"content":"Codes","dynamic":false,"spread":false}],[{"content":"code03","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/2023/11/07/Codes/code03.md","pathname":"/2023/11/07/Codes/code03","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/code01.g5qDiTfd.css"}],"routeData":{"route":"/2023/11/07/codes/code04","isIndex":false,"type":"page","pattern":"^\\/2023\\/11\\/07\\/Codes\\/code04\\/?$","segments":[[{"content":"2023","dynamic":false,"spread":false}],[{"content":"11","dynamic":false,"spread":false}],[{"content":"07","dynamic":false,"spread":false}],[{"content":"Codes","dynamic":false,"spread":false}],[{"content":"code04","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/2023/11/07/Codes/code04.md","pathname":"/2023/11/07/Codes/code04","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/code01.g5qDiTfd.css"}],"routeData":{"route":"/2023/11/07/codes/code05","isIndex":false,"type":"page","pattern":"^\\/2023\\/11\\/07\\/Codes\\/code05\\/?$","segments":[[{"content":"2023","dynamic":false,"spread":false}],[{"content":"11","dynamic":false,"spread":false}],[{"content":"07","dynamic":false,"spread":false}],[{"content":"Codes","dynamic":false,"spread":false}],[{"content":"code05","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/2023/11/07/Codes/code05.md","pathname":"/2023/11/07/Codes/code05","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/2023/11/07/title","isIndex":false,"type":"endpoint","pattern":"^\\/2023\\/11\\/07\\/title\\/?$","segments":[[{"content":"2023","dynamic":false,"spread":false}],[{"content":"11","dynamic":false,"spread":false}],[{"content":"07","dynamic":false,"spread":false}],[{"content":"title","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/2023/11/07/title.ts","pathname":"/2023/11/07/title","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\";.font-header[data-v-094adf9a]{font-family:Bungee Spice,sans-serif;background:#00870e;background:linear-gradient(to top,#0a1,#0a0094);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.font-roboto[data-astro-cid-sckkx6r4]{font-family:Roboto,sans-serif}\n"},{"type":"external","src":"/_astro/index.BiylVbKF.css"},{"type":"inline","content":".marcaTexto[data-v-6b70153a]{background:#d8d8d8b0;padding:0 .5rem;color:#5f5fff;font-weight:600;border-radius:6px;display:inline-flex}.exemploTexto[data-v-280f9434]{color:#14532d;font-weight:700;font-style:italic;padding-top:.5rem}.codigoTexto[data-v-971607be]{background:#b63131;padding:0 .5rem;color:#ef0;border-radius:6px;display:inline-flex}\n"},{"type":"external","src":"/_astro/code01.g5qDiTfd.css"}],"routeData":{"route":"/2023/11/07/[...title]","isIndex":false,"type":"page","pattern":"^\\/2023\\/11\\/07(?:\\/(.*?))?\\/?$","segments":[[{"content":"2023","dynamic":false,"spread":false}],[{"content":"11","dynamic":false,"spread":false}],[{"content":"07","dynamic":false,"spread":false}],[{"content":"...title","dynamic":true,"spread":true}]],"params":["...title"],"component":"src/pages/2023/11/07/[...title].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/code01.g5qDiTfd.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\";.font-header[data-v-094adf9a]{font-family:Bungee Spice,sans-serif;background:#00870e;background:linear-gradient(to top,#0a1,#0a0094);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.font-roboto[data-astro-cid-sckkx6r4]{font-family:Roboto,sans-serif}\n"},{"type":"external","src":"/_astro/index.BiylVbKF.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ermou/Desktop/PROGRAMACAO/cantinho_do_bloguinho/blog/src/pages/2023/11/07/[...title].astro",{"propagation":"none","containsHead":true}],["C:/Users/ermou/Desktop/PROGRAMACAO/cantinho_do_bloguinho/blog/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/2023/11/07/Codes/code01.md":"chunks/pages/code01_DuLDFnqO.mjs","/src/pages/2023/11/07/Codes/code02.md":"chunks/pages/code02_LUyuckIC.mjs","/src/pages/2023/11/07/Codes/code03.md":"chunks/pages/code03_DpknsN9o.mjs","/src/pages/2023/11/07/Codes/code04.md":"chunks/pages/code04_EEVd7ETI.mjs","/src/pages/2023/11/07/Codes/code05.md":"chunks/pages/code05_wlI1PdDo.mjs","/node_modules/.pnpm/astro@4.4.5_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DXQxnSNR.mjs","/src/pages/index.astro":"chunks/pages/index_DM9zefzQ.mjs","/node_modules/.pnpm/astro-expressive-code@0.33.4_astro@4.4.5/node_modules/astro-expressive-code/routes/scripts.ts":"chunks/pages/scripts_DRMj9b1K.mjs","/node_modules/.pnpm/astro-expressive-code@0.33.4_astro@4.4.5/node_modules/astro-expressive-code/routes/styles.ts":"chunks/pages/styles_BhHjzmhx.mjs","/src/pages/2023/11/07/title.ts":"chunks/pages/title_CQvU0ofJ.mjs","\u0000@astrojs-manifest":"manifest_BIt8VMle.mjs","\u0000@astro-page:node_modules/.pnpm/astro-expressive-code@0.33.4_astro@4.4.5/node_modules/astro-expressive-code/routes/styles@_@ts":"chunks/styles_C9P54QAD.mjs","\u0000@astro-page:node_modules/.pnpm/astro-expressive-code@0.33.4_astro@4.4.5/node_modules/astro-expressive-code/routes/scripts@_@ts":"chunks/scripts_BnhbUhZ1.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.4.5_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_xOwsRi1r.mjs","\u0000@astro-page:src/pages/2023/11/07/Codes/code01@_@md":"chunks/code01_BzUr0lhl.mjs","\u0000@astro-page:src/pages/2023/11/07/Codes/code02@_@md":"chunks/code02_B1QFndd0.mjs","\u0000@astro-page:src/pages/2023/11/07/Codes/code03@_@md":"chunks/code03_CbOOWVTd.mjs","\u0000@astro-page:src/pages/2023/11/07/Codes/code04@_@md":"chunks/code04_CiiBVjUm.mjs","\u0000@astro-page:src/pages/2023/11/07/Codes/code05@_@md":"chunks/code05_CcoYwLk8.mjs","\u0000@astro-page:src/pages/2023/11/07/title@_@ts":"chunks/title_DOKHH_UJ.mjs","\u0000@astro-page:src/pages/2023/11/07/[...title]@_@astro":"chunks/_.._Dhy6z8pf.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BOZRGzC3.mjs","C:/Users/ermou/Desktop/PROGRAMACAO/cantinho_do_bloguinho/blog/src/components/Modal/Modal.vue":"_astro/Modal.7P6xSRsp.js","@astrojs/vue/client.js":"_astro/client.B1xjd6Pe.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/code01.g5qDiTfd.css","/_astro/index.BiylVbKF.css","/favicon.svg","/_astro/client.B1xjd6Pe.js","/_astro/Modal.7P6xSRsp.js","/_astro/runtime-dom.esm-bundler.D2dB0PTj.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
