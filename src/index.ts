import { Providers } from "./providers";
import { initialize } from "./server";

initialize();

/**
 * @RoutesProvider register
 * @DatabaseProvider register
 * */
Providers.register();
