export class AsyncTests {
   tFetch() {
      return fetch("https://httpbin.org/delay/1?num=1")
         .then((response) => response.json())
         .then((json) => Number(json.args.num));
   }

   async dummyfetch() {
      let start = performance.now();

      const p1 = await this.tFetch();
      const p2 = await this.tFetch();
      const p3 = await this.tFetch();
      const sum = p1 + p2 + p3;

      console.log(`dummyfetch: ${(performance.now() - start).toFixed(2)} ms`);
      console.log("res = " + sum);
   }

   async smartFetch() {
      let start = performance.now();

      const p1 = this.tFetch();
      const p2 = this.tFetch();
      const p3 = this.tFetch();

      const results = await Promise.all([p1, p2, p3]);
      let sum = results.reduce((acc, num) => acc + num, 0);
      //sum ="coucou";
      console.log(`smartFetch: ${(performance.now() - start).toFixed(2)} ms`);
      console.log("res = " + sum);
   }

   async main() {
      await this.dummyfetch();
      console.log("---------------------------------------------");
      await this.smartFetch();
   }
}

