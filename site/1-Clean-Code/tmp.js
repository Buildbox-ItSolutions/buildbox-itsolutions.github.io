function renderContent(dataToRender) {
    const element = dataToRender.element
    const rootElement = dataToRender.root
    validateElementType(element)

    const tags = createTags( dataToRender.element, dataToRender.attributes )
    root.innerHTML = tags.opening + dataToRender.content + tags.closing
}

function validateElementType(element) {
    if (element === 'script' || element === 'SCRIPT') {
        throw new Error('Invalid element.')
    }
}

function createTags(element, attributes) {
    const attributeList = buildAttributesList(attributes)
    const openingTag = buildTag({
        element: element,
        attributes: attributeList,
        isOpening: true,
    })
    const closingTag = buildTag({ element: element, isOpening: false })

    return { opening: openingTag, closing: closingTag }
}

function buildAttributesList(attributes) {
    let attributeList = ''
    for (const attribute of attributes) {
        attributeList = `${attributeList} ${attribute.name}="${attribute.value}"`
    }
    return attributeList;
}

function buildTag(tagInformation) {
    const element = tagInformation.element
    const attributes = tagInformation.attributes
    const isOpeningTag = tagInformation.isOpening

    if (isOpeningTag)   return( '<' + element + attributes + '>' )

    return( tag = '</' + element + '>' )
}
