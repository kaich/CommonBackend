defineClass('ASForum.HomeViewController', {

  filterTopic: function() {
    var keywords = ["越狱","刷机","平刷"]
    var topics = self.topicList().toJS()
    var filteredTopics = []
    for(var i = 0 ; i < topics.length ; i++) {
      var topic = topics[i]
      var topicTitle = topic.topicTitle().toJS()
      var isContained = false
      for(var j = 0 ; j < keywords.length ; j ++) {
        if(topicTitle.includes(keywords[j])) {
          isContained = true
          break
        }
      }
      if(!isContained) {
        filteredTopics.push(topic)
      }
    }
    self.setTopicList(filteredTopics)
  }

})


defineClass('ASForum.NodeTopicListViewController', {

  filterTopic: function() {
    var keywords = ["越狱","刷机","平刷"]
    var topics = self.topicList().toJS()
    var filteredTopics = []
    for(var i = 0 ; i < topics.length ; i++) {
      var topic = topics[i]
      var topicTitle = topic.topicTitle().toJS()
      var isContained = false
      for(var j = 0 ; j < keywords.length ; j ++) {
        if(topicTitle.includes(keywords[j])) {
          isContained = true
          break
        }
      }
      if(!isContained) {
        filteredTopics.push(topic)
      }
    }
    self.setTopicList(filteredTopics)
  }

})

defineClass('ASForum.RightViewController', {

  filterNodes: function() {
    var keywords = ["越狱"]
    var filteredNodes = []
    var nodes = self.rightNodes().toJS()
    for(var i = 0 ; i < nodes.length ; i ++) {
       var node = nodes[i]
       var nodeName = node.nodeName().toJS()
       var isContained = false 
       for(var j = 0 ; j < keywords.length ; j++) {
         if(nodeName.includes(keywords[j])) {
            isContained = true 
            break
         }
       }
       if(!isContained) {
         filteredNodes.push(node) 
       }
    }
    self.setRightNodes(filteredNodes)
  } 

})
