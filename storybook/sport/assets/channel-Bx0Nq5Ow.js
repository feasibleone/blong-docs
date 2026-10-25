import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { dt as init_color, ft as Utils, pt as init_utils, ut as Color } from "./chunk-ICPOFSXX-BJUpm1HO.js";
//#region ../../common/temp/node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/channel.js
var channel;
function init_channel() {
	return (init_channel = __esmMin((() => {
		init_utils();
		init_color();
		channel = (color, channel) => {
			return Utils.lang.round(Color.parse(color)[channel]);
		};
	})))();
}
//#endregion
export { init_channel as n, channel as t };
