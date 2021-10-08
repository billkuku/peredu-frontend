<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
    <n-timeline item-placement="right">
      <n-timeline-item 
        title="Idea Generated" 
        time="2021-Feb"/>
      <n-timeline-item
        title="Spring and MongoDB decided"
        type="info"
        content="mongodb provides more room for creativity while satisfying the basic functions of sql database, perfect search engine of Mongodb."
        time="2021-April"
      />
      <n-timeline-item
        title="Learn Spring"
        content="If learning is a challenge, then I am so willing to accept it, and permissive learning deprives the brain of its control over the body."
        time="2021-May"
      />
      <n-timeline-item
        type="success"
        title="Backend-Prototyp Generated"
        content="When one thinking strategy can’t solve a problem, there must be another can."
        time="2021-June"
      />
      <n-timeline-item
        type="info"
        title="Vue decided and learned."
        content="I want to own the whole world, even if it’s not perfect, so let’s start with full stack.
        BTW, Most of the framework selection recommendations are biased."
        time="2021-June"
      />
      <n-timeline-item 
      type="error" 
      title="Switch from Session-based-login to Java-Web-Token"
      content="It is always so difficult to overthrow oneself, but if overthrowing oneself is the truth."
      time="2018-June" 
      />
      <n-timeline-item
        type="success"
        title="Frontend-Prototyp Generated"
        content="As long as I'm still thinking and working."
        time="2021-Aug"
      />
      <n-timeline-item
        type="success"
        title="Fullstack deployed"
        content="Money can solve problems that need money to solve...  !!!But money is invented by people"
        time="2021-Sep"
      />
      <n-timeline-item
        type="info"
        title="Naive UI comes up"
        content="I'd like to sleep with my eyes open, the dark mystery attracts me."
        time="2021-Sep"
      />
      <n-timeline-item
        type="warning"
        title="to be continued"
        content=""
        time=""
      />
    </n-timeline>
        Image source: 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'About',
  components: {
    //ValidationProvider
  }

})

</script>