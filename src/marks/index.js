/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { Bold, Italic as TipTapItalic, Strike as TipTapStrike, Link as TipTapLink } from 'tiptap-extensions'

/**
 * This file maps prosemirror mark names to tiptap classes,
 * so we can reuse the prosemirror-markdown default parser for now
 */

class Strong extends Bold {

	get name() {
		return 'strong'
	}

}

class Italic extends TipTapItalic {

	get name() {
		return 'em'
	}

}

class Strike extends TipTapStrike {

	get schema() {
		return {
			parseDOM: [
				{
					tag: 's',
				},
				{
					tag: 'del',
				},
				{
					tag: 'strike',
				},
				{
					style: 'text-decoration',
					getAttrs: value => value === 'line-through',
				},
			],
			toDOM: () => ['s', 0],
			toMarkdown: {
				open: '~~',
				close: '~~',
				mixable: true,
				expelEnclosingWhitespace: true,
			},
		}
	}

}

class Link extends TipTapLink {

	get schema() {
		return {
			attrs: {
				href: {
					default: null,
				},
			},
			inclusive: false,
			parseDOM: [
				{
					tag: 'a[href]',
					getAttrs: dom => ({
						href: dom.getAttribute('href'),
					}),
				},
			],
			toDOM: node => ['a', {
				...node.attrs,
				title: node.attrs.href,
				rel: 'noopener noreferrer nofollow',
			}, 0],
		}
	}

}

/** Strike is currently unsupported by prosemirror-markdown */

export {
	Strong,
	Italic,
	Strike,
	Link,
}
