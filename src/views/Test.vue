<template>
    <h2>Test Page</h2>
  <div>
    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>

    <label class="btn btn-default">
      <input type="file" ref="file" @change="selectFile" />
    </label>

    <button class="btn btn-success" :disabled="!selectedFiles" @click="upload">
      Upload
    </button>

    <div class="alert alert-light" role="alert">{{ message }}</div>

    <div class="card">
      <div class="card-header">List of Files</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(file, index) in fileInfos"
          :key="index"
        >
          <a :href="file.url">{{ file.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "upload-files",
  data() {
    return {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: []
    };
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },
    upload() {
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);
      this.uploadService(this.currentFile, event => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then(response => {
          this.message = response.data.message;
          return this.getFilesService();
        })
        .then(files => {
          this.fileInfos = files.data;
        })
        .catch(() => {
          this.progress = 0;
          this.message = "Could not upload the file!";
          this.currentFile = undefined;
        });
      this.selectedFiles = undefined;
    },
    uploadService(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        return axios
                    .post("/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    onUploadProgress
                     });
    },
    getFilesService() {
        return axios.get("/files");
    }
  },
  mounted() {
    this.getFilesService().then(response => {
      this.fileInfos = response.data;
    });
  }
};
</script>

