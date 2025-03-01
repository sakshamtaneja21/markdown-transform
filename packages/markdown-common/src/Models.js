/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const COMMON_NS_PREFIX = 'org.accordproject.commonmark.';

const commonMarkModel = `
namespace org.accordproject.commonmark

/**
 * A model for a commonmark format markdown file
 */

abstract concept Node {
    o String text optional
    o Node[] nodes optional
    o Integer line optional
    o Integer column optional
    o Integer position optional
    o Integer startTagPosition optional
}

abstract concept Root extends Node {
}

abstract concept Child extends Node {
}

concept Text extends Child {
}

concept Attribute {
    o String name
    o String value
}
concept TagInfo {
    o String tagName
    o String attributeString
    o Attribute[] attributes
    o String content
    o Boolean closed
}

concept CodeBlock extends Child {
    o String info optional
    o TagInfo tag optional
}

concept Code extends Child {
    o String info optional
}

concept HtmlInline extends Child {
    o TagInfo tag optional
}

concept HtmlBlock extends Child {
    o TagInfo tag optional
}

concept Emph extends Child {
}

concept Strong extends Child {
}

concept BlockQuote extends Child {
}

concept Heading extends Child {
    o String level
}

concept ThematicBreak extends Child {
}

concept Softbreak extends Child {
}

concept Linebreak extends Child {
}

concept Link extends Child {
    o String destination
    o String title
}

concept Image extends Child {
    o String destination
    o String title
}

concept Paragraph extends Child {
}

concept List extends Child {
    o String type
    o String start optional
    o String tight
    o String delimiter optional
}

concept Item extends Child {
}

concept Document extends Root {
    o String xmlns
}
`;

module.exports = { COMMON_NS_PREFIX, commonMarkModel };
