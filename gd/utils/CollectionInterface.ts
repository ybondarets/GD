///<reference path="../typing.d.ts"/>

namespace GD {
    export interface CollectionInterface {
        length(): number;
        reset(data: Array<any>);
        add(data: any);
        first(): any;
        last(): any;
        each(callback: (data: any) => any);
        filter(callback: (data: any) => boolean): Collection<any>;
        getByPosition(position: number): any;
        hasAtPosition(position: number): boolean;
        remove(position: number);
        toArray(): Array<any>
    }
}