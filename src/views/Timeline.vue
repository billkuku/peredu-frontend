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
            content="Learning can deprive the brain of control over the body."
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
            content="I want to own the whole world, even if it’s not perfect."
            time="2021-June"
          />
          <n-timeline-item 
          type="error" 
          title="Switch from Session-based-login to Java-Web-Token"
          content="It is always so difficult to overthrow oneself, but if overthrowing oneself is the truth."
          time="2021-June" 
          />
          <n-timeline-item
            type="success"
            title="Frontend-Prototyp Generated"
            content="Start is much harder than stop, I didn't make any choice before start and I don't want to anyway."
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
            content="I used to sleep with my eyes open, the dark mystery attracts me. Now I prefer close my eyes tightly."
            time="2021-Sep"
          />
          <n-timeline-item
            type="warning"
            title="to be continued"
            content=""
            time=""
          />
        </n-timeline>
    
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Roadmap',
  components: {
    //ValidationProvider
  }

})

</script>