import Rodux from "@rbxts/rodux";
import Roact from "@rbxts/react-ts";

export type InferStoreState<T> = T extends Rodux.Store<infer S> ? S : never;
export type InferStoreAction<T> = T extends Rodux.Store<any, infer A> ? A : never;

/**
 * A Function Component that provides the store.
 */
export declare const Provider: Roact.FunctionComponent<{ store: Rodux.Store<any>, context?: Roact.Context<Rodux.Store<any>> }>;

/**
 * A hook to access the Rodux Store's `dispatch` method.
 *
 * @returns Rodux store's `dispatch` method
 *
 * @example
 * function CounterComponent() {
 *   const dispatch = useDispatch<RootStore>();
 *   return (
 *     <textlabel
 *       Text={"Increase counter"}
 *       Event={{
 *         Activated: () => dispatch({ type: "increase-counter" }),
 *       }}
 *     />
 *   );
 * }
 */
export declare function useDispatch<A extends Rodux.Action = Rodux.AnyAction>(): Rodux.Dispatch<A>;
export declare function useDispatch<S extends Rodux.Store<any>>(): Rodux.Dispatch<InferStoreAction<S>>;
export declare function useDispatch<Dispatch = Rodux.Dispatch<any>>(): Dispatch;

/**
 * A hook to access the Rodux Store's state. This hook takes a selector function as an argument. The selector is called
 * with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter that allows you to customize the
 * way the selected state is compared to determine whether the component needs to be re-rendered.
 *
 * @param selector - The selector function
 * @param isEqual - The equality comparison function
 *
 * @returns The selected portion of the state
 *
 * @example
 * function CounterComponent() {
 *   const count = useSelector((state: RootState) => state.counter);
 *   return <textlabel Text={`Counter: ${count}`} />;
 * }
 */
export declare function useSelector<State = {}, Selected = unknown>(
    selector: (state: State) => Selected,
    isEqual?: (selectedState: Selected | undefined, oldSelectedState: Selected | undefined) => boolean,
): Selected;

/**
 * A hook to access the Rodux Store.
 *
 * @returns The Rodux store
 *
 * @example
 * function CounterComponent() {
 *   const store = useStore<RootStore>();
 *   return <textlabel Text={store.getState()} />;
 * }
 */
export declare function useStore<S extends Rodux.Store<any>>(): S;
export declare function useStore<S, A extends Rodux.Action = Rodux.AnyAction>(): Rodux.Store<S, A>;

/**
 * Does a shallow comparison of two values (usually tables). This is included as a helper function to be used with useSelector.
 * @param objA - The first value to compare
 * @param objB - The second value to compare
 * @returns result - Whether the two values are equal
 */
export declare function shallowEqual(objA: unknown, objB: unknown): boolean;

/**
 * A hook to access the Rodux Store's state. This hook takes a selector function as an argument. The selector is called
 * with the store state. Takes a custom context as an argument.
 *
 * This hook takes an optional equality comparison function as the second parameter that allows you to customize the
 * way the selected state is compared to determine whether the component needs to be re-rendered.
 *
 * @param selector - The selector function
 * @param isEqual - The equality comparison function
 * @param context - The custom context with the store
 * @returns The selected portion of the state
 *
 * @example
 * function CounterComponent() {
 *   const count = useSelector((state: RootState) => state.counter);
 *   return <textlabel Text={`Counter: ${count}`} />;
 * }
 */
export declare function useCustomSelector<Store extends Rodux.Store<any>, Selected = unknown>(
    selector: (state: InferStoreState<Store>) => Selected,
    isEqual: ((selectedState: Selected | undefined, oldSelectedState: Selected | undefined) => boolean) | undefined,
    context: Roact.Context<Store>
): Selected;

/**
 * A hook to access the Rodux Store's `dispatch` method. Takes a custom context as an argument.
 *
 * @param context The custom context
 * @returns Rodux store's `dispatch` method
 *
 * @example
 * function CounterComponent() {
 *   const dispatch = useDispatch<RootStore>();
 *   return (
 *     <textlabel
 *       Text={"Increase counter"}
 *       Event={{
 *         Activated: () => dispatch({ type: "increase-counter" }),
 *       }}
 *     />
 *   );
 * }
 */
export declare function useCustomDispatch<Store extends Rodux.Store<any>>(context: Roact.Context<Store>): Rodux.Dispatch<InferStoreAction<Store>>;