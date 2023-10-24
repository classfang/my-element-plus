import type { ExtractPropTypes, VNode } from 'vue';
export declare const paginationProps: {
    readonly pageSize: NumberConstructor;
    readonly defaultPageSize: NumberConstructor;
    readonly total: NumberConstructor;
    readonly pageCount: NumberConstructor;
    readonly pagerCount: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    readonly currentPage: NumberConstructor;
    readonly defaultCurrentPage: NumberConstructor;
    readonly layout: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    readonly pageSizes: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
    readonly popperClass: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly prevText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly prevIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>, boolean>;
    readonly nextText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly nextIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>, boolean>;
    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly small: BooleanConstructor;
    readonly background: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly hideOnSinglePage: BooleanConstructor;
};
export declare type PaginationProps = ExtractPropTypes<typeof paginationProps>;
export declare const paginationEmits: {
    'update:current-page': (val: number) => boolean;
    'update:page-size': (val: number) => boolean;
    'size-change': (val: number) => boolean;
    'current-change': (val: number) => boolean;
    'prev-click': (val: number) => boolean;
    'next-click': (val: number) => boolean;
};
export declare type PaginationEmits = typeof paginationEmits;
declare const _default: import("vue").DefineComponent<{
    readonly pageSize: NumberConstructor;
    readonly defaultPageSize: NumberConstructor;
    readonly total: NumberConstructor;
    readonly pageCount: NumberConstructor;
    readonly pagerCount: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    readonly currentPage: NumberConstructor;
    readonly defaultCurrentPage: NumberConstructor;
    readonly layout: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    readonly pageSizes: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
    readonly popperClass: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly prevText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly prevIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>, boolean>;
    readonly nextText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly nextIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>, boolean>;
    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly small: BooleanConstructor;
    readonly background: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly hideOnSinglePage: BooleanConstructor;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current-page': (val: number) => boolean;
    'update:page-size': (val: number) => boolean;
    'size-change': (val: number) => boolean;
    'current-change': (val: number) => boolean;
    'prev-click': (val: number) => boolean;
    'next-click': (val: number) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly pageSize: NumberConstructor;
    readonly defaultPageSize: NumberConstructor;
    readonly total: NumberConstructor;
    readonly pageCount: NumberConstructor;
    readonly pagerCount: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    readonly currentPage: NumberConstructor;
    readonly defaultCurrentPage: NumberConstructor;
    readonly layout: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    readonly pageSizes: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
    readonly popperClass: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly prevText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly prevIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>, boolean>;
    readonly nextText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly nextIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>, boolean>;
    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly small: BooleanConstructor;
    readonly background: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly hideOnSinglePage: BooleanConstructor;
}>> & {
    "onUpdate:current-page"?: ((val: number) => any) | undefined;
    "onUpdate:page-size"?: ((val: number) => any) | undefined;
    "onSize-change"?: ((val: number) => any) | undefined;
    "onCurrent-change"?: ((val: number) => any) | undefined;
    "onPrev-click"?: ((val: number) => any) | undefined;
    "onNext-click"?: ((val: number) => any) | undefined;
}, {
    readonly small: boolean;
    readonly popperClass: string;
    readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabled: boolean;
    readonly layout: string;
    readonly background: boolean;
    readonly pagerCount: number;
    readonly pageSizes: number[];
    readonly prevText: string;
    readonly prevIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
    readonly nextText: string;
    readonly nextIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
    readonly hideOnSinglePage: boolean;
}>;
export default _default;
