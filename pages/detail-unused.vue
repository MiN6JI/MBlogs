<template>
  <UContainer class="p-10">
    <div class="p-10 w-full flex flex-col items-center rounded-xl bg-muted">
      <div class="w-[60%]">
        <div>
          <div class="w-full flex flex-row py-6">
            <div class="w-1/2">
              <div class="text-gray normal-text">October 5, 2025</div>
            </div>
            <div class="w-1/2 flex justify-end">
              <div
                class="inline text-xs font-medium py-1 px-4 rounded-2xl bg-[var(--color-mint)]"
              >
                Blog Tags
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://picsum.photos/1920/768.webp"
              alt="blog posts"
              class="rounded-xl"
            />
          </div>
          <div class="py-2">
            <div class="sub-heading">
              Financial Planning for Entrepreneurs: A Success Blueprint
            </div>
          </div>
        </div>
        <p class="normal-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis
          dolore non molestiae? Fugiat quia mollitia ipsam, beatae laudantium
          deleniti tempore assumenda corporis aperiam blanditiis facilis
          dolorem, maiores consectetur rerum at aut est eveniet ab iste
          cupiditate delectus! Perspiciatis explicabo repudiandae at officia
          cumque voluptatem earum tenetur ab accusamus voluptatibus.
        </p>
        <p class="normal-text pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          quis dolores quibusdam dicta deserunt architecto explicabo beatae
          voluptates dolor aut id ipsa nihil magni porro molestiae ex numquam
          hic modi quasi iste vel? Eligendi, eum iusto veniam dolorem vitae
          nesciunt voluptates expedita alias in deserunt. Magnam ex tempora
          explicabo sint. Quod at quasi unde expedita totam reiciendis deleniti
          possimus tempore enim natus facilis pariatur iure dolore fugit vel
          culpa magni beatae nulla tempora, minima quis? Velit, dignissimos a,
          animi pariatur quaerat autem reiciendis ad aut, praesentium suscipit
          placeat quas dolores accusantium? Cupiditate pariatur laborum illo qui
          aliquid corporis repudiandae nisi?
        </p>
        <p class="pt-4 normal-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis
          dolore non molestiae? Fugiat quia mollitia ipsam, beatae laudantium
          deleniti tempore assumenda corporis aperiam blanditiis facilis
          dolorem, maiores consectetur rerum at aut est eveniet ab iste
          cupiditate delectus! Perspiciatis explicabo repudiandae at officia
          cumque voluptatem earum tenetur ab accusamus voluptatibus.
        </p>
      </div>
    </div>
  </UContainer>
  <UContainer>
    <div class="sub-heading text-center">Your Posts</div>
    <div class="flex-justify pt-10 gap-6">
      <div class="w-1/3"><SinglePost /></div>
      <div class="w-1/3"><SinglePost /></div>
      <div class="w-1/3"><SinglePost /></div>
    </div>
  </UContainer>
</template>
