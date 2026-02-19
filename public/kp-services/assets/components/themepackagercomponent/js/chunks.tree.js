TP.tree.Chunks = function(config) {
    config = config || {};
    Ext.applyIf(
        config,
        {
            id: 'tp-tree-chunks'
            ,dataUrl: TP.config.connector_url + '?action=chunk/getTree'
            ,fields: ['id','name']
            ,data: []
            ,border: false
            ,rootVisible: false
            ,root: {
                nodeType: 'async'
            }
        }
    );
    TP.tree.Chunks.superclass.constructor.call(this,config);
}
Ext.extend(TP.tree.Chunks,TP.tree.LocalTree,{
    updateSelected: function() {
        var selected = [];
        Ext.each(this.getChecked('id'), function(el){
            ma = el.match(/^n_chunk_(\d+)$/);
            if (ma != null && ma.length == 2) {
                selected.push(ma[1]);
            }
        });
        Ext.getCmp('tp-tree-chunks-selected_ids').setValue(selected.join(','));
        return true;
    }
});

Ext.reg('tp-tree-chunks',TP.tree.Chunks);
