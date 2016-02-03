'use strict';

var p = class Node {
	constructor(data, left, right) {
		this.data = data || null;
		this.left = left || null;
		this.right = right || null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		var n = new Node(data, null, null);
		var present_position = this.root;
		var parent;

		if (this.root === null){
			this.root = n;
		} else { 
			while (true){
				parent = present_position;
				if (data < present_position.data) {
					present_position = present_position.left;
					if (present_position === null) {
						parent.left = n;
						break;
					}
				} else {
					present_position = present_position.right;
					if(present_position === null){
						parent.right = n;
						break;
					}
				}
			}
		}
	}

	contains(data) {
		var current = this.root;
		while (current.data !== data){
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
			if (current === null) {
				return false;
				break;
			}
		}
		return true;
	}

	remove(data) {
		var found = false,
			parent = null,
			current = this.root,
			childCount,
			replacement,
			replacementParent;

        while(!found && current){
        
            if (data < current.data){
                parent = current;
                current = current.left;
            } else if (data > current.data){
                parent = current;
                current = current.right;
            } else if (data === current.data){
                found = true;
            } else{
            	break;
            }
        }

		if(found){

			childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

			// Р—РЅР°С‡РµРЅРёРµ РІ РєРѕСЂРЅРµ
			if (current === this.root){
				// РќРµС‚Сѓ РґРµС‚РµР№
				if (childCount === 0){
					this.root = null;
				// 1 children
				} else if (childCount === 1){
					this.root = (current.right === null ? current.left : current.right);
				// 2 childrens
				} else {
				
				}
			// Р—РЅР°С‡РµРЅРёРµ РЅРµ РІ РєРѕСЂРЅРµ
			} else {
				// РќРµС‚Сѓ РґРµС‚РµР№
				if (childCount === 0){
					// РµСЃР»Рё Р·РЅР°С‡РµРЅРёРµ РјРµРЅСЊС€Рµ СЂРѕРґРёС‚РµР»СЏ СѓРґР°Р»СЏРµРј Р»РµРІС‹Р№ СЌР»РµРјРµРЅС‚
					if (current.data < parent.data){
						parent.left = null;
					// РµСЃР»Рё Р·РЅР°С‡РµРЅРёРµ Р±РѕР»СЊС€Рµ СЂРѕРґРёС‚РµР»СЏ СѓРґР°Р»СЏРµРј РїСЂР°РІС‹Р№ СЌР»РµРјРµРЅС‚
					} else {
						parent.right = null;
					}
				// Р•СЃС‚СЊ 1 children
				} else if (childCount === 1) {
					if (current.data < parent.data){
						parent.left = (current.left === null ? current.right : current.left);
					} else {
						parent.right = (current.left === null ? current.right : current.left);
					}
				// РµСЃР»Рё 2 childrens
				} else {
					
				}
			}

		}

	}

	size() {

	}

	isEmpty() {
		return this.root === null;
	}
}
