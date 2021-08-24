/*******************************************************************************
 * Copyright (c) 2021 Obeo.
 * This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *     Obeo - initial API and implementation
 *******************************************************************************/
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { TreeItemType } from './TreeItem.types';

export interface TreeItemHandler {
  handles: (treeItem: TreeItemType) => boolean;
  getItemTitle: (treeItem: TreeItemType) => string;
  getItemLabel: (treeItem: TreeItemType) => string;
  getModal: (name: string) => any;
  getMenuEntries: (
    item: TreeItemType,
    editingContextId: string,
    readOnly: boolean,
    openModal: (modalName: string) => void,
    closeContextMenu: () => void,
    classes: ClassNameMap<'item'>
  ) => Array<any>;
}

// Catch-all, used when no custom handler is found for an item.
const defaultItemHandler: TreeItemHandler = {
  handles: (item) => true,
  getItemTitle: (item) => 'Unknown',
  getItemLabel: (item) => item.label,
  getModal: (name) => null,
  getMenuEntries: (item) => {
    return [];
  },
};

const handlers = [];

const value = {
  registerTreeItemHandler(handler: TreeItemHandler): void {
    handlers.unshift(handler);
  },
  getTreeItemHandler(item: TreeItemType): TreeItemHandler {
    return handlers.find((entry) => entry.handles(item)) ?? defaultItemHandler;
  },
};

export const TreeItemHandlersContext = React.createContext(value);
export function useTreeItemHandler(item: TreeItemType): TreeItemHandler {
  return value.getTreeItemHandler(item);
}
