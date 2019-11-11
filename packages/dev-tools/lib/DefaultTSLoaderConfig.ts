import {RuleSetCondition, RuleSetRule, RuleSetUse} from "webpack";
import {DefaultTSLoaderRule} from "./DefaultTSLoaderRule";

export default class DefaultTSLoaderConfig implements RuleSetRule {
  public test: RuleSetCondition | RegExp = /\.tsx?$/;
  public use: DefaultTSLoaderRule = new DefaultTSLoaderRule();
}
