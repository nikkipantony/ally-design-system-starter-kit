/*
 * Internal Link Component Stories
 *
 */

import React from "react"
import InLink from "./InLink"

export default {
    title: "/Atoms/Internal Link",
    component: InLink,
    parameters: {
        docs: {
            description: {
                component: "Component description witten in _markdown_.",
            },
        },
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
        },
    },
    argTypes: {
        to: {
            description: "Props description",
        },
        text: {
            description: "Props description",
        },
        className: {
            description: "Props description",
        },
        modifier: {
            description: "Props description",
        },
    },
}

export const InternalLink = args => <InLink to="/" {...args} />
InternalLink.args = {
    to: "/",
    text: "Internal Link Example",
    className: "",
    modifier: "",
}
