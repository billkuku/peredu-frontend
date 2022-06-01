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
            title="Learn Spring and it's ecosystem"
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
            type="error"
            title="Give up some technologies that are no longer suitable, e.g. Thymeleaf, Jsp, Ajax etc."
            content="Yearning for a newer world, sometimes necessary to stop loss in time."
            time="2021-June"
          />
          <n-timeline-item
            type="info"
            title="Vue decided and learned, reconfigure backend for frontend."
            content="I want to own the whole world, even if it’s not perfect."
            time="2021-June"
          />
          <n-timeline-item 
          type="error" 
          title="Switch from Session-based-auth to Java-Web-Token"
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
            title="Fullstack deployed on Heroku"
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
            title="Pause, take a break. I need a job."
            content=""
            time="2021-Oct-12"
          />
          <n-timeline-item
            type="info"
            title="Back to work, finding balance between peredu and others"
            content="Spoon and cake barely come together, need find them out, but is spoon really necessary?"
            time="2021-Oct-24"
          />
          <n-timeline-item
            type="info"
            title="Got Job, start with my new Project with jakarta, JavaFX, mysql, this job was temp. stoped"
            content="Do right at right time"
            time="2021-Dec-1"
          />
          <n-timeline-item
            type="info"
            title="start with my new Project with c#, nx"
            content="much boring, should no last"
            time="2021-Feb-4"
          />
          <n-timeline-item
            type="info"
            title="I tried, but failed, yes it's my fault."
            content="Do right things at right place in right time."
            time="2021-Feb-4"
          />
          <n-timeline-item
            type="info"
            title="Rethink the job"
            content="There must be a way, or I will start to create."
            time="2021-May-4"
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