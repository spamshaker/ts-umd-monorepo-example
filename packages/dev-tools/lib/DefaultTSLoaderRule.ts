import {LogLevel} from "ts-loader/dist/interfaces";
import {RuleSetLoader} from "webpack";
interface ITSLoaderOption {
  logLevel: LogLevel;
  transpileOnly: boolean;
}
export class DefaultTSLoaderRule implements RuleSetLoader {
  public readonly loader: string = "ts-loader";
  public options: ITSLoaderOption = {
    logLevel: "INFO",
    transpileOnly: false,
  };
}
