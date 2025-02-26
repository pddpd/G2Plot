import { Types } from '@antv/g2';
import { Data, Meta, Options, Region, Tooltip } from '../../types';
import { Axis } from '../../types/axis';
import { Legend } from '../../types/legend';
import { Geometry } from '../../adaptor/geometries/base';
import { Animation } from '../../types/animation';
import { Annotation } from '../../types/annotation';
import { Interaction } from '../../types/interaction';
import { IPlotTypes } from './utils';

/**
 * @title geometry 映射信息
 */
export type IGeometry = Geometry & {
  adjust?: Types.AdjustOption;
};
/**
 * @title 子 view 的配置
 * @description 暂时不开嵌套 view 的情况
 */
export type IView = {
  /**
   * @title view 的布局范围
   * @default "占满全部"
   */
  readonly region?: Region;
  /**
   * @title view 中的数据
   */
  readonly data: Data;
  /**
   * @title view 中对应的 meta 字段配置
   */
  readonly meta?: Record<string, Meta>;
  /**
   * @title 坐标系的配置
   * @description 每一个 view 具有相同的坐标系
   */
  readonly coordinate?: Types.CoordinateOption;
  /**
   * @title 图形 geometry 及映射配置
   */
  readonly geometries: IGeometry[];
  /**
   * @title x,y 轴
   */
  readonly axes?: false | Record<string, Axis>;
  /**
   * @title interactions
   */
  readonly interactions?: Interaction[];
  /**
   * @title annotation
   */
  readonly annotations?: Annotation[];
  /**
   * @title annotation
   */
  readonly animation?: Animation;
  /**
   * @title tooltip
   */
  readonly tooltip?: Tooltip;
};

/**
 * @title 子 plot 的配置
 */
export type IPlot = IPlotTypes & {
  /**
   * @title plot view 的布局范围
   * @default "占满全部"
   */
  readonly region?: Region;
};

/**
 * @title 类型定义
 */
export interface MixOptions
  extends Omit<Options, 'data' | 'legend' | 'xAxis' | 'yAxis' | 'legend' | 'tooltip' | 'slider' | 'scrollbar'> {
  /**
   * @title 是否同步子 view 的配置
   * @description 目前仅仅支持 true / false，后续需要增加 function 的方式进行自定义 view 之前的布局同步
   */
  readonly syncViewPadding?: boolean;
  /**
   * @title 每一个图层的配置
   * @description 每个图层包括有自己的：数据、图形、图形映射
   */
  readonly views?: IView[];
  /**
   * @title 限定与指定 plot 类型
   * @description 支持使用已有的 plot，限定与指定 plot 类型
   */
  readonly plots?: IPlot[];
  /**
   * @title tooltip 配置
   * @description tooltip 配置在 chart 层配置
   */
  readonly tooltip?: Tooltip;
  /**
   * @title legend 配置
   * @description 统一顶层配置
   */
  readonly legend?: false | Record<string, Legend>;
}
