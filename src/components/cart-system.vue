<template>

    <div>
          <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Your Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
        <div class="text-center col-pa-xl">
            <div class="row justify-center col-md">
            Prodcts: {{ product[0] + count }}
            </div>
            <div class="row justify-center col-md">
                <v-btn
                rounded
                color="primary"
                dark
                >
                Rounded Button
                </v-btn>

            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            tab: null,
            items: [
            'web', 'shopping', 'videos', 'images', 'news',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },
    computed: {
        ...mapState({
            product: state => state.CartSystem.products,
            count: state => state.CartSystem.count
        })
    }
}
</script>