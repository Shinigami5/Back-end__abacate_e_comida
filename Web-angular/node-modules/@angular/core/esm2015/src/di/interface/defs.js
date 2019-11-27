/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getClosureSafeProperty } from '../../util/property';
/**
 * Construct an `InjectableDef` which defines how a token will be constructed by the DI system, and
 * in which injectors (if any) it will be available.
 *
 * This should be assigned to a static `ngInjectableDef` field on a type, which will then be an
 * `InjectableType`.
 *
 * Options:
 * * `providedIn` determines which injectors will include the injectable, by either associating it
 *   with an `@NgModule` or other `InjectorType`, or by specifying that this injectable should be
 *   provided in the `'root'` injector, which will be the application-level injector in most apps.
 * * `factory` gives the zero argument function which will create an instance of the injectable.
 *   The factory can call `inject` to access the `Injector` and request injection of dependencies.
 *
 * @codeGenApi
 */
export function ɵɵdefineInjectable(opts) {
    return {
        token: opts.token, providedIn: opts.providedIn || null, factory: opts.factory,
        value: undefined,
    };
}
/**
 * @deprecated in v8, delete after v10. This API should be used only be generated code, and that
 * code should now use ɵɵdefineInjectable instead.
 * @publicApi
 */
export const defineInjectable = ɵɵdefineInjectable;
/**
 * Construct an `InjectorDef` which configures an injector.
 *
 * This should be assigned to a static `ngInjectorDef` field on a type, which will then be an
 * `InjectorType`.
 *
 * Options:
 *
 * * `factory`: an `InjectorType` is an instantiable type, so a zero argument `factory` function to
 *   create the type must be provided. If that factory function needs to inject arguments, it can
 *   use the `inject` function.
 * * `providers`: an optional array of providers to add to the injector. Each provider must
 *   either have a factory or point to a type which has an `ngInjectableDef` static property (the
 *   type must be an `InjectableType`).
 * * `imports`: an optional array of imports of other `InjectorType`s or `InjectorTypeWithModule`s
 *   whose providers will also be added to the injector. Locally provided types will override
 *   providers from imports.
 *
 * @publicApi
 */
export function ɵɵdefineInjector(options) {
    return {
        factory: options.factory, providers: options.providers || [], imports: options.imports || [],
    };
}
/**
 * Read the `ngInjectableDef` for `type` in a way which is immune to accidentally reading inherited
 * value.
 *
 * @param type A type which may have its own (non-inherited) `ngInjectableDef`.
 */
export function getInjectableDef(type) {
    const def = type[NG_INJECTABLE_DEF];
    // The definition read above may come from a base class. `hasOwnProperty` is not sufficient to
    // distinguish this case, as in older browsers (e.g. IE10) static property inheritance is
    // implemented by copying the properties.
    //
    // Instead, the ngInjectableDef's token is compared to the type, and if they don't match then the
    // property was not defined directly on the type itself, and was likely inherited. The definition
    // is only returned if the type matches the def.token.
    return def && def.token === type ? def : null;
}
/**
 * Read the `ngInjectableDef` for `type` or read the `ngInjectableDef` from one of its ancestors.
 *
 * @param type A type which may have `ngInjectableDef`, via inheritance.
 *
 * @deprecated Will be removed in v10, where an error will occur in the scenario if we find the
 * `ngInjectableDef` on an ancestor only.
 */
export function getInheritedInjectableDef(type) {
    if (type && type[NG_INJECTABLE_DEF]) {
        // TODO(FW-1307): Re-add ngDevMode when closure can handle it
        // ngDevMode &&
        console.warn(`DEPRECATED: DI is instantiating a token "${type.name}" that inherits its @Injectable decorator but does not provide one itself.\n` +
            `This will become an error in v10. Please add @Injectable() to the "${type.name}" class.`);
        return type[NG_INJECTABLE_DEF];
    }
    else {
        return null;
    }
}
/**
 * Read the `ngInjectorDef` type in a way which is immune to accidentally reading inherited value.
 *
 * @param type type which may have `ngInjectorDef`
 */
export function getInjectorDef(type) {
    return type && type.hasOwnProperty(NG_INJECTOR_DEF) ? type[NG_INJECTOR_DEF] : null;
}
export const NG_INJECTABLE_DEF = getClosureSafeProperty({ ngInjectableDef: getClosureSafeProperty });
export const NG_INJECTOR_DEF = getClosureSafeProperty({ ngInjectorDef: getClosureSafeProperty });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2ludGVyZmFjZS9kZWZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBbUgzRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUksSUFJckM7SUFDQyxPQUFRO1FBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFpQixJQUFJLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDaEYsS0FBSyxFQUFFLFNBQVM7S0FDVyxDQUFDO0FBQ3BDLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFFbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBaUU7SUFFaEcsT0FBUTtRQUNOLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFO0tBQzdELENBQUM7QUFDcEMsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFJLElBQVM7SUFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUF1QixDQUFDO0lBQzFELDhGQUE4RjtJQUM5Rix5RkFBeUY7SUFDekYseUNBQXlDO0lBQ3pDLEVBQUU7SUFDRixpR0FBaUc7SUFDakcsaUdBQWlHO0lBQ2pHLHNEQUFzRDtJQUN0RCxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDaEQsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUseUJBQXlCLENBQUksSUFBUztJQUNwRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUNuQyw2REFBNkQ7UUFDN0QsZUFBZTtRQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1IsNENBQTRDLElBQUksQ0FBQyxJQUFJLDhFQUE4RTtZQUNuSSxzRUFBc0UsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUM7UUFDL0YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUNoQztTQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FBSSxJQUFTO0lBQ3pDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzlGLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQyxFQUFDLGVBQWUsRUFBRSxzQkFBc0IsRUFBQyxDQUFDLENBQUM7QUFDbkcsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDLEVBQUMsYUFBYSxFQUFFLHNCQUFzQixFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge2dldENsb3N1cmVTYWZlUHJvcGVydHl9IGZyb20gJy4uLy4uL3V0aWwvcHJvcGVydHknO1xuaW1wb3J0IHtDbGFzc1Byb3ZpZGVyLCBDb25zdHJ1Y3RvclByb3ZpZGVyLCBFeGlzdGluZ1Byb3ZpZGVyLCBGYWN0b3J5UHJvdmlkZXIsIFN0YXRpY0NsYXNzUHJvdmlkZXIsIFZhbHVlUHJvdmlkZXJ9IGZyb20gJy4vcHJvdmlkZXInO1xuXG5cblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBhYm91dCBob3cgYSB0eXBlIG9yIGBJbmplY3Rpb25Ub2tlbmAgaW50ZXJmYWNlcyB3aXRoIHRoZSBESSBzeXN0ZW0uXG4gKlxuICogQXQgYSBtaW5pbXVtLCB0aGlzIGluY2x1ZGVzIGEgYGZhY3RvcnlgIHdoaWNoIGRlZmluZXMgaG93IHRvIGNyZWF0ZSB0aGUgZ2l2ZW4gdHlwZSBgVGAsIHBvc3NpYmx5XG4gKiByZXF1ZXN0aW5nIGluamVjdGlvbiBvZiBvdGhlciB0eXBlcyBpZiBuZWNlc3NhcnkuXG4gKlxuICogT3B0aW9uYWxseSwgYSBgcHJvdmlkZWRJbmAgcGFyYW1ldGVyIHNwZWNpZmllcyB0aGF0IHRoZSBnaXZlbiB0eXBlIGJlbG9uZ3MgdG8gYSBwYXJ0aWN1bGFyXG4gKiBgSW5qZWN0b3JEZWZgLCBgTmdNb2R1bGVgLCBvciBhIHNwZWNpYWwgc2NvcGUgKGUuZy4gYCdyb290J2ApLiBBIHZhbHVlIG9mIGBudWxsYCBpbmRpY2F0ZXNcbiAqIHRoYXQgdGhlIGluamVjdGFibGUgZG9lcyBub3QgYmVsb25nIHRvIGFueSBzY29wZS5cbiAqXG4gKiBOT1RFOiBUaGlzIGlzIGEgcHJpdmF0ZSB0eXBlIGFuZCBzaG91bGQgbm90IGJlIGV4cG9ydGVkXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIMm1ybVJbmplY3RhYmxlRGVmPFQ+IHtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGF0IHRoZSBnaXZlbiB0eXBlIGJlbG9uZ3MgdG8gYSBwYXJ0aWN1bGFyIGluamVjdG9yOlxuICAgKiAtIGBJbmplY3RvclR5cGVgIHN1Y2ggYXMgYE5nTW9kdWxlYCxcbiAgICogLSBgJ3Jvb3QnYCB0aGUgcm9vdCBpbmplY3RvclxuICAgKiAtIGAnYW55J2AgYWxsIGluamVjdG9ycy5cbiAgICogLSBgbnVsbGAsIGRvZXMgbm90IGJlbG9uZyB0byBhbnkgaW5qZWN0b3IuIE11c3QgYmUgZXhwbGljaXRseSBsaXN0ZWQgaW4gdGhlIGluamVjdG9yXG4gICAqICAgYHByb3ZpZGVyc2AuXG4gICAqL1xuICBwcm92aWRlZEluOiBJbmplY3RvclR5cGU8YW55Pnwncm9vdCd8J2FueSd8bnVsbDtcblxuICAvKipcbiAgICogVGhlIHRva2VuIHRvIHdoaWNoIHRoaXMgZGVmaW5pdGlvbiBiZWxvbmdzLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBtYXkgbm90IGJlIHRoZSBzYW1lIGFzIHRoZSB0eXBlIHRoYXQgdGhlIGBmYWN0b3J5YCB3aWxsIGNyZWF0ZS5cbiAgICovXG4gIHRva2VuOiB1bmtub3duO1xuXG4gIC8qKlxuICAgKiBGYWN0b3J5IG1ldGhvZCB0byBleGVjdXRlIHRvIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgaW5qZWN0YWJsZS5cbiAgICovXG4gIGZhY3Rvcnk6ICh0PzogVHlwZTxhbnk+KSA9PiBUO1xuXG4gIC8qKlxuICAgKiBJbiBhIGNhc2Ugb2Ygbm8gZXhwbGljaXQgaW5qZWN0b3IsIGEgbG9jYXRpb24gd2hlcmUgdGhlIGluc3RhbmNlIG9mIHRoZSBpbmplY3RhYmxlIGlzIHN0b3JlZC5cbiAgICovXG4gIHZhbHVlOiBUfHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvdmlkZXJzIHRvIGJlIGluY2x1ZGVkIGluIGFuIGBJbmplY3RvcmAgYXMgd2VsbCBhcyBob3cgdGhlIGdpdmVuIHR5cGVcbiAqIHdoaWNoIGNhcnJpZXMgdGhlIGluZm9ybWF0aW9uIHNob3VsZCBiZSBjcmVhdGVkIGJ5IHRoZSBESSBzeXN0ZW0uXG4gKlxuICogQW4gYEluamVjdG9yRGVmYCBjYW4gaW1wb3J0IG90aGVyIHR5cGVzIHdoaWNoIGhhdmUgYEluamVjdG9yRGVmc2AsIGZvcm1pbmcgYSBkZWVwIG5lc3RlZFxuICogc3RydWN0dXJlIG9mIHByb3ZpZGVycyB3aXRoIGEgZGVmaW5lZCBwcmlvcml0eSAoaWRlbnRpY2FsbHkgdG8gaG93IGBOZ01vZHVsZWBzIGFsc28gaGF2ZVxuICogYW4gaW1wb3J0L2RlcGVuZGVuY3kgc3RydWN0dXJlKS5cbiAqXG4gKiBOT1RFOiBUaGlzIGlzIGEgcHJpdmF0ZSB0eXBlIGFuZCBzaG91bGQgbm90IGJlIGV4cG9ydGVkXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIMm1ybVJbmplY3RvckRlZjxUPiB7XG4gIGZhY3Rvcnk6ICgpID0+IFQ7XG5cbiAgLy8gVE9ETyhhbHhodWIpOiBOYXJyb3cgZG93biB0aGUgdHlwZSBoZXJlIG9uY2UgZGVjb3JhdG9ycyBwcm9wZXJseSBjaGFuZ2UgdGhlIHJldHVybiB0eXBlIG9mIHRoZVxuICAvLyBjbGFzcyB0aGV5IGFyZSBkZWNvcmF0aW5nICh0byBhZGQgdGhlIG5nSW5qZWN0YWJsZURlZiBwcm9wZXJ0eSBmb3IgZXhhbXBsZSkuXG4gIHByb3ZpZGVyczogKFR5cGU8YW55PnxWYWx1ZVByb3ZpZGVyfEV4aXN0aW5nUHJvdmlkZXJ8RmFjdG9yeVByb3ZpZGVyfENvbnN0cnVjdG9yUHJvdmlkZXJ8XG4gICAgICAgICAgICAgIFN0YXRpY0NsYXNzUHJvdmlkZXJ8Q2xhc3NQcm92aWRlcnxhbnlbXSlbXTtcblxuICBpbXBvcnRzOiAoSW5qZWN0b3JUeXBlPGFueT58SW5qZWN0b3JUeXBlV2l0aFByb3ZpZGVyczxhbnk+KVtdO1xufVxuXG4vKipcbiAqIEEgYFR5cGVgIHdoaWNoIGhhcyBhbiBgSW5qZWN0YWJsZURlZmAgc3RhdGljIGZpZWxkLlxuICpcbiAqIGBJbmplY3RhYmxlRGVmVHlwZWBzIGNvbnRhaW4gdGhlaXIgb3duIERlcGVuZGVuY3kgSW5qZWN0aW9uIG1ldGFkYXRhIGFuZCBhcmUgdXNhYmxlIGluIGFuXG4gKiBgSW5qZWN0b3JEZWZgLWJhc2VkIGBTdGF0aWNJbmplY3Rvci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0YWJsZVR5cGU8VD4gZXh0ZW5kcyBUeXBlPFQ+IHtcbiAgLyoqXG4gICAqIE9wYXF1ZSB0eXBlIHdob3NlIHN0cnVjdHVyZSBpcyBoaWdobHkgdmVyc2lvbiBkZXBlbmRlbnQuIERvIG5vdCByZWx5IG9uIGFueSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgbmdJbmplY3RhYmxlRGVmOiBuZXZlcjtcbn1cblxuLyoqXG4gKiBBIHR5cGUgd2hpY2ggaGFzIGFuIGBJbmplY3RvckRlZmAgc3RhdGljIGZpZWxkLlxuICpcbiAqIGBJbmplY3RvckRlZlR5cGVzYCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgYSBgU3RhdGljSW5qZWN0b3JgLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RvclR5cGU8VD4gZXh0ZW5kcyBUeXBlPFQ+IHtcbiAgLyoqXG4gICAqIE9wYXF1ZSB0eXBlIHdob3NlIHN0cnVjdHVyZSBpcyBoaWdobHkgdmVyc2lvbiBkZXBlbmRlbnQuIERvIG5vdCByZWx5IG9uIGFueSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgbmdJbmplY3RvckRlZjogbmV2ZXI7XG59XG5cbi8qKlxuICogRGVzY3JpYmVzIHRoZSBgSW5qZWN0b3JEZWZgIGVxdWl2YWxlbnQgb2YgYSBgTW9kdWxlV2l0aFByb3ZpZGVyc2AsIGFuIGBJbmplY3RvckRlZlR5cGVgIHdpdGggYW5cbiAqIGFzc29jaWF0ZWQgYXJyYXkgb2YgcHJvdmlkZXJzLlxuICpcbiAqIE9iamVjdHMgb2YgdGhpcyB0eXBlIGNhbiBiZSBsaXN0ZWQgaW4gdGhlIGltcG9ydHMgc2VjdGlvbiBvZiBhbiBgSW5qZWN0b3JEZWZgLlxuICpcbiAqIE5PVEU6IFRoaXMgaXMgYSBwcml2YXRlIHR5cGUgYW5kIHNob3VsZCBub3QgYmUgZXhwb3J0ZWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RvclR5cGVXaXRoUHJvdmlkZXJzPFQ+IHtcbiAgbmdNb2R1bGU6IEluamVjdG9yVHlwZTxUPjtcbiAgcHJvdmlkZXJzPzogKFR5cGU8YW55PnxWYWx1ZVByb3ZpZGVyfEV4aXN0aW5nUHJvdmlkZXJ8RmFjdG9yeVByb3ZpZGVyfENvbnN0cnVjdG9yUHJvdmlkZXJ8XG4gICAgICAgICAgICAgICBTdGF0aWNDbGFzc1Byb3ZpZGVyfENsYXNzUHJvdmlkZXJ8YW55W10pW107XG59XG5cblxuLyoqXG4gKiBDb25zdHJ1Y3QgYW4gYEluamVjdGFibGVEZWZgIHdoaWNoIGRlZmluZXMgaG93IGEgdG9rZW4gd2lsbCBiZSBjb25zdHJ1Y3RlZCBieSB0aGUgREkgc3lzdGVtLCBhbmRcbiAqIGluIHdoaWNoIGluamVjdG9ycyAoaWYgYW55KSBpdCB3aWxsIGJlIGF2YWlsYWJsZS5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBhc3NpZ25lZCB0byBhIHN0YXRpYyBgbmdJbmplY3RhYmxlRGVmYCBmaWVsZCBvbiBhIHR5cGUsIHdoaWNoIHdpbGwgdGhlbiBiZSBhblxuICogYEluamVjdGFibGVUeXBlYC5cbiAqXG4gKiBPcHRpb25zOlxuICogKiBgcHJvdmlkZWRJbmAgZGV0ZXJtaW5lcyB3aGljaCBpbmplY3RvcnMgd2lsbCBpbmNsdWRlIHRoZSBpbmplY3RhYmxlLCBieSBlaXRoZXIgYXNzb2NpYXRpbmcgaXRcbiAqICAgd2l0aCBhbiBgQE5nTW9kdWxlYCBvciBvdGhlciBgSW5qZWN0b3JUeXBlYCwgb3IgYnkgc3BlY2lmeWluZyB0aGF0IHRoaXMgaW5qZWN0YWJsZSBzaG91bGQgYmVcbiAqICAgcHJvdmlkZWQgaW4gdGhlIGAncm9vdCdgIGluamVjdG9yLCB3aGljaCB3aWxsIGJlIHRoZSBhcHBsaWNhdGlvbi1sZXZlbCBpbmplY3RvciBpbiBtb3N0IGFwcHMuXG4gKiAqIGBmYWN0b3J5YCBnaXZlcyB0aGUgemVybyBhcmd1bWVudCBmdW5jdGlvbiB3aGljaCB3aWxsIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgaW5qZWN0YWJsZS5cbiAqICAgVGhlIGZhY3RvcnkgY2FuIGNhbGwgYGluamVjdGAgdG8gYWNjZXNzIHRoZSBgSW5qZWN0b3JgIGFuZCByZXF1ZXN0IGluamVjdGlvbiBvZiBkZXBlbmRlbmNpZXMuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVkZWZpbmVJbmplY3RhYmxlPFQ+KG9wdHM6IHtcbiAgdG9rZW46IHVua25vd24sXG4gIHByb3ZpZGVkSW4/OiBUeXBlPGFueT58ICdyb290JyB8ICdhbnknIHwgbnVsbCxcbiAgZmFjdG9yeTogKCkgPT4gVCxcbn0pOiBuZXZlciB7XG4gIHJldHVybiAoe1xuICAgIHRva2VuOiBvcHRzLnRva2VuLCBwcm92aWRlZEluOiBvcHRzLnByb3ZpZGVkSW4gYXMgYW55IHx8IG51bGwsIGZhY3Rvcnk6IG9wdHMuZmFjdG9yeSxcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgfSBhcyDJtcm1SW5qZWN0YWJsZURlZjxUPikgYXMgbmV2ZXI7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgaW4gdjgsIGRlbGV0ZSBhZnRlciB2MTAuIFRoaXMgQVBJIHNob3VsZCBiZSB1c2VkIG9ubHkgYmUgZ2VuZXJhdGVkIGNvZGUsIGFuZCB0aGF0XG4gKiBjb2RlIHNob3VsZCBub3cgdXNlIMm1ybVkZWZpbmVJbmplY3RhYmxlIGluc3RlYWQuXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZpbmVJbmplY3RhYmxlID0gybXJtWRlZmluZUluamVjdGFibGU7XG5cbi8qKlxuICogQ29uc3RydWN0IGFuIGBJbmplY3RvckRlZmAgd2hpY2ggY29uZmlndXJlcyBhbiBpbmplY3Rvci5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBhc3NpZ25lZCB0byBhIHN0YXRpYyBgbmdJbmplY3RvckRlZmAgZmllbGQgb24gYSB0eXBlLCB3aGljaCB3aWxsIHRoZW4gYmUgYW5cbiAqIGBJbmplY3RvclR5cGVgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogKiBgZmFjdG9yeWA6IGFuIGBJbmplY3RvclR5cGVgIGlzIGFuIGluc3RhbnRpYWJsZSB0eXBlLCBzbyBhIHplcm8gYXJndW1lbnQgYGZhY3RvcnlgIGZ1bmN0aW9uIHRvXG4gKiAgIGNyZWF0ZSB0aGUgdHlwZSBtdXN0IGJlIHByb3ZpZGVkLiBJZiB0aGF0IGZhY3RvcnkgZnVuY3Rpb24gbmVlZHMgdG8gaW5qZWN0IGFyZ3VtZW50cywgaXQgY2FuXG4gKiAgIHVzZSB0aGUgYGluamVjdGAgZnVuY3Rpb24uXG4gKiAqIGBwcm92aWRlcnNgOiBhbiBvcHRpb25hbCBhcnJheSBvZiBwcm92aWRlcnMgdG8gYWRkIHRvIHRoZSBpbmplY3Rvci4gRWFjaCBwcm92aWRlciBtdXN0XG4gKiAgIGVpdGhlciBoYXZlIGEgZmFjdG9yeSBvciBwb2ludCB0byBhIHR5cGUgd2hpY2ggaGFzIGFuIGBuZ0luamVjdGFibGVEZWZgIHN0YXRpYyBwcm9wZXJ0eSAodGhlXG4gKiAgIHR5cGUgbXVzdCBiZSBhbiBgSW5qZWN0YWJsZVR5cGVgKS5cbiAqICogYGltcG9ydHNgOiBhbiBvcHRpb25hbCBhcnJheSBvZiBpbXBvcnRzIG9mIG90aGVyIGBJbmplY3RvclR5cGVgcyBvciBgSW5qZWN0b3JUeXBlV2l0aE1vZHVsZWBzXG4gKiAgIHdob3NlIHByb3ZpZGVycyB3aWxsIGFsc28gYmUgYWRkZWQgdG8gdGhlIGluamVjdG9yLiBMb2NhbGx5IHByb3ZpZGVkIHR5cGVzIHdpbGwgb3ZlcnJpZGVcbiAqICAgcHJvdmlkZXJzIGZyb20gaW1wb3J0cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1ZGVmaW5lSW5qZWN0b3Iob3B0aW9uczoge2ZhY3Rvcnk6ICgpID0+IGFueSwgcHJvdmlkZXJzPzogYW55W10sIGltcG9ydHM/OiBhbnlbXX0pOlxuICAgIG5ldmVyIHtcbiAgcmV0dXJuICh7XG4gICAgZmFjdG9yeTogb3B0aW9ucy5mYWN0b3J5LCBwcm92aWRlcnM6IG9wdGlvbnMucHJvdmlkZXJzIHx8IFtdLCBpbXBvcnRzOiBvcHRpb25zLmltcG9ydHMgfHwgW10sXG4gIH0gYXMgybXJtUluamVjdG9yRGVmPGFueT4pIGFzIG5ldmVyO1xufVxuXG4vKipcbiAqIFJlYWQgdGhlIGBuZ0luamVjdGFibGVEZWZgIGZvciBgdHlwZWAgaW4gYSB3YXkgd2hpY2ggaXMgaW1tdW5lIHRvIGFjY2lkZW50YWxseSByZWFkaW5nIGluaGVyaXRlZFxuICogdmFsdWUuXG4gKlxuICogQHBhcmFtIHR5cGUgQSB0eXBlIHdoaWNoIG1heSBoYXZlIGl0cyBvd24gKG5vbi1pbmhlcml0ZWQpIGBuZ0luamVjdGFibGVEZWZgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5qZWN0YWJsZURlZjxUPih0eXBlOiBhbnkpOiDJtcm1SW5qZWN0YWJsZURlZjxUPnxudWxsIHtcbiAgY29uc3QgZGVmID0gdHlwZVtOR19JTkpFQ1RBQkxFX0RFRl0gYXMgybXJtUluamVjdGFibGVEZWY8VD47XG4gIC8vIFRoZSBkZWZpbml0aW9uIHJlYWQgYWJvdmUgbWF5IGNvbWUgZnJvbSBhIGJhc2UgY2xhc3MuIGBoYXNPd25Qcm9wZXJ0eWAgaXMgbm90IHN1ZmZpY2llbnQgdG9cbiAgLy8gZGlzdGluZ3Vpc2ggdGhpcyBjYXNlLCBhcyBpbiBvbGRlciBicm93c2VycyAoZS5nLiBJRTEwKSBzdGF0aWMgcHJvcGVydHkgaW5oZXJpdGFuY2UgaXNcbiAgLy8gaW1wbGVtZW50ZWQgYnkgY29weWluZyB0aGUgcHJvcGVydGllcy5cbiAgLy9cbiAgLy8gSW5zdGVhZCwgdGhlIG5nSW5qZWN0YWJsZURlZidzIHRva2VuIGlzIGNvbXBhcmVkIHRvIHRoZSB0eXBlLCBhbmQgaWYgdGhleSBkb24ndCBtYXRjaCB0aGVuIHRoZVxuICAvLyBwcm9wZXJ0eSB3YXMgbm90IGRlZmluZWQgZGlyZWN0bHkgb24gdGhlIHR5cGUgaXRzZWxmLCBhbmQgd2FzIGxpa2VseSBpbmhlcml0ZWQuIFRoZSBkZWZpbml0aW9uXG4gIC8vIGlzIG9ubHkgcmV0dXJuZWQgaWYgdGhlIHR5cGUgbWF0Y2hlcyB0aGUgZGVmLnRva2VuLlxuICByZXR1cm4gZGVmICYmIGRlZi50b2tlbiA9PT0gdHlwZSA/IGRlZiA6IG51bGw7XG59XG5cbi8qKlxuICogUmVhZCB0aGUgYG5nSW5qZWN0YWJsZURlZmAgZm9yIGB0eXBlYCBvciByZWFkIHRoZSBgbmdJbmplY3RhYmxlRGVmYCBmcm9tIG9uZSBvZiBpdHMgYW5jZXN0b3JzLlxuICpcbiAqIEBwYXJhbSB0eXBlIEEgdHlwZSB3aGljaCBtYXkgaGF2ZSBgbmdJbmplY3RhYmxlRGVmYCwgdmlhIGluaGVyaXRhbmNlLlxuICpcbiAqIEBkZXByZWNhdGVkIFdpbGwgYmUgcmVtb3ZlZCBpbiB2MTAsIHdoZXJlIGFuIGVycm9yIHdpbGwgb2NjdXIgaW4gdGhlIHNjZW5hcmlvIGlmIHdlIGZpbmQgdGhlXG4gKiBgbmdJbmplY3RhYmxlRGVmYCBvbiBhbiBhbmNlc3RvciBvbmx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5oZXJpdGVkSW5qZWN0YWJsZURlZjxUPih0eXBlOiBhbnkpOiDJtcm1SW5qZWN0YWJsZURlZjxUPnxudWxsIHtcbiAgaWYgKHR5cGUgJiYgdHlwZVtOR19JTkpFQ1RBQkxFX0RFRl0pIHtcbiAgICAvLyBUT0RPKEZXLTEzMDcpOiBSZS1hZGQgbmdEZXZNb2RlIHdoZW4gY2xvc3VyZSBjYW4gaGFuZGxlIGl0XG4gICAgLy8gbmdEZXZNb2RlICYmXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgICBgREVQUkVDQVRFRDogREkgaXMgaW5zdGFudGlhdGluZyBhIHRva2VuIFwiJHt0eXBlLm5hbWV9XCIgdGhhdCBpbmhlcml0cyBpdHMgQEluamVjdGFibGUgZGVjb3JhdG9yIGJ1dCBkb2VzIG5vdCBwcm92aWRlIG9uZSBpdHNlbGYuXFxuYCArXG4gICAgICAgIGBUaGlzIHdpbGwgYmVjb21lIGFuIGVycm9yIGluIHYxMC4gUGxlYXNlIGFkZCBASW5qZWN0YWJsZSgpIHRvIHRoZSBcIiR7dHlwZS5uYW1lfVwiIGNsYXNzLmApO1xuICAgIHJldHVybiB0eXBlW05HX0lOSkVDVEFCTEVfREVGXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJlYWQgdGhlIGBuZ0luamVjdG9yRGVmYCB0eXBlIGluIGEgd2F5IHdoaWNoIGlzIGltbXVuZSB0byBhY2NpZGVudGFsbHkgcmVhZGluZyBpbmhlcml0ZWQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHR5cGUgdHlwZSB3aGljaCBtYXkgaGF2ZSBgbmdJbmplY3RvckRlZmBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluamVjdG9yRGVmPFQ+KHR5cGU6IGFueSk6IMm1ybVJbmplY3RvckRlZjxUPnxudWxsIHtcbiAgcmV0dXJuIHR5cGUgJiYgdHlwZS5oYXNPd25Qcm9wZXJ0eShOR19JTkpFQ1RPUl9ERUYpID8gKHR5cGUgYXMgYW55KVtOR19JTkpFQ1RPUl9ERUZdIDogbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IE5HX0lOSkVDVEFCTEVfREVGID0gZ2V0Q2xvc3VyZVNhZmVQcm9wZXJ0eSh7bmdJbmplY3RhYmxlRGVmOiBnZXRDbG9zdXJlU2FmZVByb3BlcnR5fSk7XG5leHBvcnQgY29uc3QgTkdfSU5KRUNUT1JfREVGID0gZ2V0Q2xvc3VyZVNhZmVQcm9wZXJ0eSh7bmdJbmplY3RvckRlZjogZ2V0Q2xvc3VyZVNhZmVQcm9wZXJ0eX0pO1xuIl19