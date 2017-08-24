import * as maptalks from 'maptalks';
const options = {
    'position': 'top-right',
    'draggable': true,
    'custom': false,
    'content': '',
    'closeButton': true
} ;
export class blur extends maptalks.Contorl(){
        constructor(options){
            super(options);
        }
         addTo(map){
            this._map = map;
         }
}

Panel.mergeOptions(options);

