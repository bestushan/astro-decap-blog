// This is a standard React component used by Decap
CMS.registerPreviewTemplate("blog", createClass({
    render: function() {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const body = this.props.widgetFor('body');
  
      return h('div', { className: 'preview-container' },
        h('h1', {}, title),
        h('hr', {}),
        h('div', { className: 'content' }, body)
      );
    }
  }));