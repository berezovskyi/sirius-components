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
package org.eclipse.sirius.web.spring.collaborative.dto;

import java.text.MessageFormat;
import java.util.Objects;
import java.util.UUID;

import org.eclipse.sirius.web.annotations.graphql.GraphQLObjectType;
import org.eclipse.sirius.web.core.api.IPayload;

/**
 * The payload of the queryBasedInt query.
 *
 * @author fbarbin
 */
@GraphQLObjectType
public final class QueryBasedIntSuccessPayload implements IPayload {

    private final UUID id;

    private final Integer result;

    public QueryBasedIntSuccessPayload(UUID id, Integer result) {
        this.id = Objects.requireNonNull(id);
        this.result = Objects.requireNonNull(result);
    }

    @Override
    public UUID getId() {
        return this.id;
    }

    public Integer getResult() {
        return this.result;
    }

    @Override
    public String toString() {
        String pattern = "{0} '{'id: {1}, result: {2}'}'"; //$NON-NLS-1$
        return MessageFormat.format(pattern, this.getClass().getSimpleName(), this.id, this.result);
    }
}
