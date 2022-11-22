<template>
  <div>
    <div class="container" v-if="items">
      <ul class="card-inline-layout">
        <li
          v-for="item in items"
          :key="item.id"
          class="card card-publication has-footer card-default"
        >
          <NuxtLink :to="'/car/' + item.id" class="link">
            <div class="card-top">
              <img
                calss="car-brand"
                :src="
                  require(`~/assets/car-img/${item['make_model'].make.name}/${item['make_model'].make.name}.png`)
                "
                alt="brand"
                width="80"
              />
              <span>
                <h3 class="card-title card-publication-title">
                  {{ item["make_model"].make.name }}
                  {{ item["make_model"].name }}
                </h3>
              </span>
            </div>
            <div class="card-block">
              <div class="meta-categories card-meta">
                <img
                  class="card-img"
                  :src="
                    require(`~/assets/car-img/${item['make_model'].make.name}/${item['make_model'].make.name}-bg.png`)
                  "
                  alt="car"
                  width="150"
                />
              </div>
              <ul class="card-body">
                <li class="card-body__group-year">
                  <span>Год выпуска</span>
                  <span>{{ item.year }}</span>
                </li>
                <li class="card-body__group-body">
                  <span>Кузов</span>
                  <span>{{ item["make_model_trim_body"].type }}</span>
                </li>
                <li class="card-body__group-color">
                  <span>Цвет</span>
                  <span>{{
                    item["make_model_trim_exterior_colors"][0].rgb
                  }}</span>
                </li>
                <li class="card-body__group-engine">
                  <span>Двигатель</span>
                  <ul class="value">
                    <li>{{ item["make_model_trim_engine"].size }} л.</li>
                    <li>
                      {{ item["make_model_trim_engine"]["horsepower_hp"] }} л.с.
                    </li>
                    <li>
                      {{ item["make_model_trim_engine"]["engine_type"] }}
                    </li>
                  </ul>
                </li>
                <li class="card-body__group-trim">
                  <span>Комплектация</span>
                  <span>{{ item.description.slice(0, 10) }}</span>
                </li>
              </ul>
            </div>
            <div class="card-footer">
                <span class="footer-item">Цена</span>
                <span class="footer-item"> <b>{{ item.invoice }}</b></span>
              </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <ul v-else class="container-tail">
      <li v-for="item in itemsFromTail" :key="item.id" class="item">
        <NuxtLink :to="'/car/' + item.id">
          <div class="webpage-card-img">
            <img class="card-img" alt="" />
          </div>

          <div class="card-block">
            <div class="meta-categories card-meta">
              <a
                class="meta-cat"
                onclick="return false;"
                href=""
                data-jalios-catid="jn1_323089"
                >Font</a
              >
            </div>

            <h3 class="card-title card-publication-title">
              {{ item["make_model"].name }}
            </h3>
            <div class="card-meta">
              <span class="author"
                ><div
                  class="wrapper-photo icon-photo account mbr-status mbr-status-0"
                >
                  <a class="ID_c_103 ctxTooltipCard"
                    ><img alt="Olivier Dedieu" class="photo"
                  /></a>
                </div>
                Travis Bickle</span
              >
              <span class="date">12 déc. 2017</span>
            </div>
          </div>

          <div class="card-block card-block-footer card-webpage-footer">
            <div class="wp-link">
              <a
                href="http://fr.tuto.com/blog/2017/12/polices-ecriture-gratuites-incontournables-2017.htm"
                title="Les 100 polices d'écriture gratuites incontournables de 2017 - Blog Tuto.com"
                target="_blank"
              >
                <img
                  class="jalios-icon jalios-icon-sm"
                  alt=""
                  title="DB Web Page"
                />
                fr.tuto.com
              </a>
            </div>

            <div class="card-actions">
              <div
                class="ajax-refresh-div vote-tag card-action-item card-add-vote"
              >
                <div class="activity-vote-action-wrapper">
                  <a
                    class="ajax-refresh ajax-action"
                    href="plugins/SocialBookmarkPlugin/jsp/common/doActivityCardRowVote.jsp?pubId=14_DBWebPage&amp;positiveVote=true&amp;vote=true"
                    onclick="return false;"
                  >
                    <span
                      class="jalios-icon jcmsplugin-socialbookmark-wp-card-vote icomoon-thumbs-up2"
                    ></span>
                  </a>
                </div>
              </div>

              <span class="card-action-item">
                <a
                  href="front/recommendation/recommendationModal.jsp?recommendedDataId=14_DBWebPage"
                  class="modal card-recommend"
                  title="Recommander cette publication à vos relations."
                  onclick="return false;"
                  ><span
                    class="jalios-icon jcmsplugin-socialbookmark-card-recommend icomoon-share3"
                  ></span>
                  <span class="card-action-item-label">Recommander</span>
                </a>
              </span>

              <div
                class="ajax-refresh-div card-action-item card-action-readlater"
              >
                <a class="ajax-refresh pub-action-jreading-read-it-later">
                  <span
                    class="jalios-icon jcmsplugin-jreading-read-it-later-light icomoon-bookmark2"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { TrimUniqItem } from "~/store/model/Attributes";

@Component
export default class Card extends Vue {
  @Prop([]) readonly items: TrimUniqItem[];
  @Prop(Object) readonly itemsFromTail: TrimUniqItem;
}
</script>

<style lang="scss" scoped>
@import "/assets/scss/card.scss";
@import "/assets/scss/tails.scss";
</style>
